import hashlib
import json
import logging
from typing import Any, Optional, Union

from dotenv import load_dotenv

from embedchain.chunkers.base_chunker import BaseChunker
from embedchain.config import AddConfig, BaseLlmConfig, ChunkerConfig
from embedchain.config.base_app_config import BaseAppConfig
from embedchain.core.db.models import DataSource
from embedchain.data_formatter import DataFormatter
from embedchain.embedder.base import BaseEmbedder
from embedchain.helpers.json_serializable import JSONSerializable
from embedchain.llm.base import BaseLlm
from embedchain.loaders.base_loader import BaseLoader
from embedchain.models.data_type import DataType, DirectDataType, IndirectDataType, SpecialDataType
from embedchain.utils.misc import detect_datatype, is_valid_json_string
from embedchain.vectordb.base import BaseVectorDB

load_dotenv()

logger = logging.getLogger(__name__)

class Mosanid(JSONSerializable):
    def __init__(
        self,
        config: BaseAppConfig,
        llm: BaseLlm,
        db: BaseVectorDB = None,
        embedder: BaseEmbedder = None,
        system_prompt: Optional[str] = None,
    ):
        """
        Initializes the EmbedChain instance, sets up a vector DB client and
        creates a collection.
        """
        self.config = config
        self.cache_config = None
        # Llm
        self.llm = llm
        # Database has support for config assignment for backwards compatibility
        if db is None and (not hasattr(self.config, "db") or self.config.db is None):
            raise ValueError("App requires Database.")
        self.db = db or self.config.db
        # Embedder
        if embedder is None:
            raise ValueError("App requires Embedder.")
        self.embedder = embedder

        # Initialize database
        self.db._set_embedder(self.embedder)
        self.db._initialize()
        # Set collection name from app config for backwards compatibility.
        if config.collection_name:
            self.db.set_collection_name(config.collection_name)

        # Add variables that are "shortcuts"
        if system_prompt:
            self.llm.config.system_prompt = system_prompt

        # Fetch the history from the database if exists
        self.llm.update_history(app_id=self.config.id)

        # Attributes that aren't subclass related.
        self.user_asks = []

        self.chunker: Optional[ChunkerConfig] = None

    @property
    def collect_metrics(self):
        return self.config.collect_metrics

    @collect_metrics.setter
    def collect_metrics(self, value):
        if not isinstance(value, bool):
            raise ValueError(f"Boolean value expected but got {type(value)}.")
        self.config.collect_metrics = value

    @property
    def online(self):
        return self.llm.config.online

    @online.setter
    def online(self, value):
        if not isinstance(value, bool):
            raise ValueError(f"Boolean value expected but got {type(value)}.")
        self.llm.config.online = value

    def add(
        self,
        source: Any,
        metadata: Optional[dict[str, Any]] = None,
        config: Optional[AddConfig] = None,
        loader: Optional[BaseLoader] = None,
        chunker: Optional[BaseChunker] = None,
        **kwargs: Optional[dict[str, Any]],
    ):
        """
        Loads the data, chunks it, create embedding for each chunk
        and then stores the embedding to vector database.
        """
        if config is not None:
            pass
        elif self.chunker is not None:
            config = AddConfig(chunker=self.chunker)
        else:
            config = AddConfig()

        try:
            DataType(source)
            logger.warning(
                f"""Starting from version v0.0.40, Embedchain can automatically detect the data type. So, in the `add` method, the argument order has changed. You no longer need to specify '{source}' for the `source` argument. So the code snippet will be `.add("{data_type}", "{source}")`"""  # noqa #E501
            )
            logger.warning(
                "Embedchain is swapping the arguments for you. This functionality might be deprecated in the future, so please adjust your code."  # noqa #E501
            )
            source, data_type = data_type, source
        except ValueError:
            pass

        data_type = detect_datatype(source)

        # `source_hash` is the md5 hash of the source argument
        source_hash = hashlib.md5(str(source).encode("utf-8")).hexdigest()

        self.user_asks.append([source, data_type.value, metadata])

        data_formatter = DataFormatter(data_type, config, loader, chunker)
        documents, metadatas, _ids, new_chunks = self._load_and_embed(
            data_formatter.loader, data_formatter.chunker, source, metadata, source_hash, config, **kwargs
        )

        self.db_session.add(
            DataSource(
                hash=source_hash,
                app_id=self.config.id,
                type=data_type.value,
                value=str(source),
                metadata=json.dumps(metadata),
            )
        )
        try:
            self.db_session.commit()
        except Exception as e:
            logger.error(f"Error adding data source: {e}")
            self.db_session.rollback()

        return source_hash

    def _get_existing_doc_id(self, chunker: BaseChunker, src: Any):
        """
        Get id of existing document for a given source, based on the data type
        """
        if chunker.data_type.value in [item.value for item in DirectDataType]:
            return None
        elif chunker.data_type.value in [item.value for item in IndirectDataType]:
            where = {"url": src}
            if chunker.data_type == DataType.JSON and is_valid_json_string(src):
                url = hashlib.sha256((src).encode("utf-8")).hexdigest()
                where = {"url": url}

            if self.config.id is not None:
                where.update({"app_id": self.config.id})

            existing_embeddings = self.db.get(
                where=where,
                limit=1,
            )
            if len(existing_embeddings.get("metadatas", [])) > 0:
                return existing_embeddings["metadatas"][0]["doc_id"]
            else:
                return None
        else:
            raise TypeError(
                f"{chunker.data_type} is type {type(chunker.data_type)}. "
                "When it should be  DirectDataType, IndirectDataType or SpecialDataType."
            )

    def _load_and_embed(
        self,
        loader: BaseLoader,
        chunker: BaseChunker,
        src: Any,
        metadata: Optional[dict[str, Any]] = None,
        source_hash: Optional[str] = None,
        add_config: Optional[AddConfig] = None,
        **kwargs: Optional[dict[str, Any]],
    ):
        """
        Loads the data from the given URL, chunks it, and adds it to database.
        """
        existing_doc_id = self._get_existing_doc_id(chunker=chunker, src=src)
        app_id = self.config.id if self.config is not None else None

        # Create chunks
        embeddings_data = chunker.create_chunks(loader, src, app_id=app_id, config=add_config.chunker)
        # spread chunking results
        documents = embeddings_data["documents"]
        metadatas = embeddings_data["metadatas"]
        ids = embeddings_data["ids"]
        new_doc_id = embeddings_data["doc_id"]

        if existing_doc_id and existing_doc_id == new_doc_id:
            logger.info("Doc content has not changed. Skipping creating chunks and embeddings")
            return [], [], [], 0

        if existing_doc_id and existing_doc_id != new_doc_id:
            logger.info("Doc content has changed. Recomputing chunks and embeddings intelligently.")
            self.db.delete({"doc_id": existing_doc_id})

        db_result = self.db.get(ids=ids, where={"url": src})
        existing_ids = set(db_result["ids"])
        if len(existing_ids):
            data_dict = {id: (doc, meta) for id, doc, meta in zip(ids, documents, metadatas)}
            data_dict = {id: value for id, value in data_dict.items() if id not in existing_ids}

            if not data_dict:
                src_copy = src
                if len(src_copy) > 50:
                    src_copy = src[:50] + "..."
                logger.info(f"All data from {src_copy} already exists in the database.")
                # Make sure to return a matching return type
                return [], [], [], 0

            ids = list(data_dict.keys())
            documents, metadatas = zip(*data_dict.values())

        new_metadatas = []
        for m in metadatas:
            if self.config.id:
                m["app_id"] = self.config.id

            m["hash"] = source_hash

            if metadata:
                m.update(metadata)
            new_metadatas.append(m)

        metadatas = new_metadatas

        chunks_before_addition = self.db.count()

        valid_documents = [doc for doc in documents if doc and isinstance(doc, str)]
        documents = valid_documents

        # Chunk documents into batches of 2048 and handle each batch
        document_batches = [documents[i : i + 2048] for i in range(0, len(documents), 2048)]
        metadata_batches = [metadatas[i : i + 2048] for i in range(0, len(metadatas), 2048)]
        id_batches = [ids[i : i + 2048] for i in range(0, len(ids), 2048)]
        for batch_docs, batch_meta, batch_ids in zip(document_batches, metadata_batches, id_batches):
            try:
                if batch_docs:
                    self.db.add(documents=batch_docs, metadatas=batch_meta, ids=batch_ids, **kwargs)
            except Exception as e:
                logger.info(f"Failed to add batch due to a bad request: {e}")
                # Handle the error, e.g., by logging, retrying, or skipping
                pass

        count_new_chunks = self.db.count() - chunks_before_addition
        logger.info(f"Successfully saved {str(src)[:100]} ({chunker.data_type}). New chunks count: {count_new_chunks}")

        return list(documents), metadatas, ids, count_new_chunks
    
    def _retrieve_from_database(
        self,
        input_query: str,
        config: Optional[BaseLlmConfig] = None,
        where=None,
        citations: bool = False,
        **kwargs: Optional[dict[str, Any]],
    ) -> Union[list[tuple[str, str, str]], list[str]]:
        """
        Queries the vector database based on the given input query.
        Gets relevant doc based on the query

        :param config: The query configuration, defaults to None
        :type config: Optional[BaseLlmConfig], optional
        :param where: A dictionary of key-value pairs to filter the database results, defaults to None
        :type where: _type_, optional
        :param citations: A boolean to indicate if db should fetch citation source
        :type citations: bool
        :return: List of contents of the document that matched your query
        :rtype: list[str]
        """
        query_config = config or self.llm.config
        if where is not None:
            where = where
        else:
            where = {}
            if query_config is not None and query_config.where is not None:
                where = query_config.where

            if self.config.id is not None:
                where.update({"app_id": self.config.id})

        contexts = self.db.query(
            input_query=input_query,
            n_results=query_config.number_documents,
            where=where,
            citations=citations,
            **kwargs,
        )

        return contexts

    def query(
        self,
        input_query: str,
        config: BaseLlmConfig = None,
        where: Optional[dict] = None,
        citations: bool = False,
        **kwargs: dict[str, Any],
    ) -> Union[tuple[str, list[tuple[str, dict]]], str, dict[str, Any]]:
        """
        Queries the vector database based on the given input query.
        Gets relevant doc based on the query and then passes it to an
        LLM as context to get the answer.

        :param input_query: The query to use.
        :type input_query: str
        :param config: The `BaseLlmConfig` instance to use as configuration options. This is used for one method call.
        To persistently use a config, declare it during app init., defaults to None
        :type config: BaseLlmConfig, optional
        :param where: A dictionary of key-value pairs to filter the database results., defaults to None
        :type where: dict[str, str], optional
        :param citations: A boolean to indicate if db should fetch citation source
        :type citations: bool
        :param kwargs: To read more params for the query function. Ex. we use citations boolean
        param to return context along with the answer
        :type kwargs: dict[str, Any]
        :return: The answer to the query, with citations if the citation flag is True
        or the dry run result
        :rtype: str, if citations is False and token_usage is False, otherwise if citations is true then
        tuple[str, list[tuple[str,str,str]]] and if token_usage is true then
        tuple[str, list[tuple[str,str,str]], dict[str, Any]]
        """
        contexts = self._retrieve_from_database(
            input_query=input_query, config=config, where=where, citations=citations, **kwargs
        )
        if citations and len(contexts) > 0 and isinstance(contexts[0], tuple):
            contexts_data_for_llm_query = list(map(lambda x: x[0], contexts))
        else:
            contexts_data_for_llm_query = contexts

        # TODO: add caching if needed

        if self.llm.config.token_usage:
            answer, token_info = self.llm.query(
                input_query=input_query, contexts=contexts_data_for_llm_query, config=config
            )
        else:
            answer = self.llm.query(
                input_query=input_query, contexts=contexts_data_for_llm_query, config=config
            )

        if citations:
            if self.llm.config.token_usage:
                return {"answer": answer, "contexts": contexts, "usage": token_info}
            return answer, contexts
        if self.llm.config.token_usage:
            return {"answer": answer, "usage": token_info}

        return answer

    def search(self, query, num_documents=3, where=None, raw_filter=None, namespace=None):
        """
        Search for similar documents related to the query in the vector database.

        Args:
            query (str): The query to use.
            num_documents (int, optional): Number of similar documents to fetch. Defaults to 3.
            where (dict[str, any], optional): Filter criteria for the search.
            raw_filter (dict[str, any], optional): Advanced raw filter criteria for the search.
            namespace (str, optional): The namespace to search in. Defaults to None.

        Raises:
            ValueError: If both `raw_filter` and `where` are used simultaneously.

        Returns:
            list[dict]: A list of dictionaries, each containing the 'context' and 'metadata' of a document.
        """

        if raw_filter and where:
            raise ValueError("You can't use both `raw_filter` and `where` together.")

        filter_type = "raw_filter" if raw_filter else "where"
        filter_criteria = raw_filter if raw_filter else where

        params = {
            "input_query": query,
            "n_results": num_documents,
            "citations": True,
            "app_id": self.config.id,
            "namespace": namespace,
            filter_type: filter_criteria,
        }

        return [{"context": c[0], "metadata": c[1]} for c in self.db.query(**params)]

    def set_collection_name(self, name: str):
        self.db.set_collection_name(name)
        self.db._get_or_create_collection(name)

    def reset(self):
        try:
            self.db_session.query(DataSource).filter_by(app_id=self.config.id).delete()
            self.db_session.commit()
        except Exception as e:
            logger.error(f"Error deleting data sources: {e}")
            self.db_session.rollback()
            return None
        self.db.reset()
        self.delete_all_chat_history(app_id=self.config.id)
