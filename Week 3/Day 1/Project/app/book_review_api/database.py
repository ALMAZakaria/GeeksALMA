from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

# Define the database connection URL (Replace 'username' & 'password' with actual credentials)
DATABASE_URL = "postgresql+asyncpg://postgres:123456789%40%40%40%40@localhost:5432/bookdb"

# Create an asynchronous engine
engine = create_async_engine(DATABASE_URL, echo=True)

# Create session factory for database interactions
SessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Dependency to get a database session
async def get_db():
    async with SessionLocal() as session:
        yield session
