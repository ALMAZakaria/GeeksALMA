from sqlalchemy.orm import Session
from models import User, Book, Review
from schemas import UserCreate, BookCreate, ReviewCreate
from auth import get_password_hash
from sqlalchemy.orm import Session
from models import Book
def create_user(db: Session, user: UserCreate):
    """Create and store a new user"""
    hashed_password = get_password_hash(user.password)
    db_user = User(username=user.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_book(db: Session, book: BookCreate):
    """Add a new book"""
    db_book = Book(title=book.title)
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

def create_review(db: Session, review: ReviewCreate, user_id: int):
    """Add a new review"""
    db_review = Review(content=review.content, book_id=review.book_id, user_id=user_id)
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review



def get_books(db: Session):
    """Retrieve all books from the database"""
    return db.query(Book).all()

