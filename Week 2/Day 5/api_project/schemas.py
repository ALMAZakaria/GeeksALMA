from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    """Base schema for user data."""
    name: str
    email: EmailStr  # Ensures email format validation
    age: int

class UserCreate(UserBase):
    """Schema for creating a new user."""
    pass

class UserUpdate(UserBase):
    """Schema for updating user details."""
    pass

class UserResponse(UserBase):
    """Schema for returning user data, including ID."""
    id: int

    class Config:
        orm_mode = True  # Allows conversion between SQLAlchemy models and Pydantic
