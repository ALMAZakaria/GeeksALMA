from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

# Base class for our models
Base = declarative_base()

class User(Base):
    """Defines the users table in the database"""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)

    # Relationship: A user can have multiple reviews
    reviews = relationship("Review", back_populates="user")

class Book(Base):
    """Defines the books table"""
    __tablename__ = "books"

    id = Column(Integer, primary_key=True)
    title = Column(String, index=True)

    # Relationship: A book can have multiple reviews
    reviews = relationship("Review", back_populates="book")

class Review(Base):
    """Defines the reviews table"""
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True)
    content = Column(String)
    book_id = Column(Integer, ForeignKey("books.id"))
    user_id = Column(Integer, ForeignKey("users.id"))

    # Relationships: Connects reviews to users and books
    book = relationship("Book", back_populates="reviews")
    user = relationship("User", back_populates="reviews")
