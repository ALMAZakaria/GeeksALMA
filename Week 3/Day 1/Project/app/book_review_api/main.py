from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import UserCreate, BookCreate, ReviewCreate
from crud import create_user, create_book, create_review, get_books

app = FastAPI()

@app.post("/signup")
async def signup(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

@app.post("/books")
async def add_book(book: BookCreate, db: Session = Depends(get_db)):
    return create_book(db, book)

@app.post("/books/{book_id}/review")
async def add_review(book_id: int, review: ReviewCreate, db: Session = Depends(get_db)):
    return create_review(db, review, user_id=1)  # Replace with actual authenticated user
@app.get("/books")
async def list_books(db: Session = Depends(get_db)):
    return get_books(db)

