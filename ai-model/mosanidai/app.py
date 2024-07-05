import logging

from mosanidai.mosanid import Mosanid
from embedchain.core.db.database import get_session, init_db, setup_engine
from embedchain.embedder.google import GoogleAIEmbedder # or openai
from embedchain.config.embedder.google import GoogleAIEmbedderConfig
from embedchain.llm.google import GoogleLlm # or openai
from embedchain.config.llm.base import BaseLlmConfig
from embedchain.config import AppConfig
from embedchain.helpers.json_serializable import register_deserializable
from embedchain.vectordb.chroma import ChromaDB
from pathlib import Path
import os

logger = logging.getLogger(__name__)
os.environ["EC_TELEMETRY"] = "false"


ABS_PATH = os.getcwd()
HOME_DIR = str(Path.home())
CONFIG_DIR = os.path.join(HOME_DIR, ".embedchain")
SQLITE_PATH = os.path.join(CONFIG_DIR, "embedchain.db")
os.environ.setdefault("EMBEDCHAIN_DB_URI", f"sqlite:///{SQLITE_PATH}")


@register_deserializable
class App(Mosanid):
    def __init__(self):
        """
        Initialize a new `App` instance.
        """

        chroma_config = {} # TODO
        self.db = ChromaDB(config=chroma_config)
        setup_engine(database_uri=os.environ.get("EMBEDCHAIN_DB_URI"))
        init_db()
        
        llm_config = {
            "model": "gemini-1.5-pro",
            "temperature": 0.1,
            "max_tokens": 2048,
            "top_p": 1,
            "stream": True
        }
        self.llm = GoogleLlm(BaseLlmConfig(**llm_config)) # or openai

        embedding_model_config = {
            "model": 'models/text-embedding-004',
            "task_type": "retrieval_document",
            "title": "Mosanid Embedding model"
        }
        self.embedding_model = GoogleAIEmbedder(
            GoogleAIEmbedderConfig(**embedding_model_config)
        ) # or openai

        self.config = AppConfig()
        self.chunker = None
        self.cache_config = None

        self._init_db()
        self.db_session = get_session()
        
        self.user_asks = []


    def _init_db(self):
        """
        Initialize the database.
        """
        self.db._set_embedder(self.embedding_model)
        self.db._initialize()
        self.db.set_collection_name(self.db.config.collection_name)


