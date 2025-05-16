from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

DATABASE_URL = "postgresql://postgres:123456789%40%40%40%40@localhost:5432/usersrestapis"

# Create an engine
engine = create_engine(DATABASE_URL)

# Correct session maker usage with `SessionLocal()`
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()
