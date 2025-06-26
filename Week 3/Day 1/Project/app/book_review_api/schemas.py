from pydantic import BaseModel

class UserCreate(BaseModel):
    """Schema for creating a new user"""
    username: str
    password: str

class BookCreate(BaseModel):
    """Schema for adding a new book"""
    title: str

class ReviewCreate(BaseModel):
    """Schema for creating a review"""
    content: str
    book_id: int
