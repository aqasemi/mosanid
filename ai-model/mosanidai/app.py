import logging

from mosanidai.mosanid import Mosanid
from embedchain.core.db.database import get_session, init_db, setup_engine
from embedchain.factory import EmbedderFactory, LlmFactory
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
        chroma_config = {} # TODO
        self.db = ChromaDB(config=chroma_config)
        setup_engine(database_uri=os.environ.get("EMBEDCHAIN_DB_URI"))
        init_db()

        embedding_model_config = {
            "model": "text-embedding-ada-002",
        }

        llm_config = {
            "model": "gpt-4o",
            "temperature": 0.1,
            "max_tokens": 2048,
            "top_p": 1,
            "stream": True
        }
        self.embedding_model = EmbedderFactory.create("openai", embedding_model_config)
        self.llm = LlmFactory.create("openai", llm_config)

    
        self.config = AppConfig()
        self.chunker = None
        self.cache_config = None

        self._init_db()
        self.db_session = get_session()
        
        self.user_asks = []


    def _init_db(self):
        self.db._set_embedder(self.embedding_model)
        self.db._initialize()
        self.db.set_collection_name(self.db.config.collection_name)


    def generate_questions(
        self,
        num_questions: int,
        topic: str,
    ):
        in_query = f"""Create {num_questions} quiz questions with 4 choices(a,b,c,d) and answer about {topic},avoid markup format,MUST have one answser,if you dont know reply Sorry,I don't know"""
        response = self.query(input_query=in_query)
        return response