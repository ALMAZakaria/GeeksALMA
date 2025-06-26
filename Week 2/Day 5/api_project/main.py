from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base
from schemas import UserCreate
from crud import get_users, create_user, get_user, update_user, delete_user

# Initialize FastAPI
app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/users", response_model=list[UserCreate])
def view_users(db: Session = Depends(get_db)):
    return get_users(db)

@app.post("/users", response_model=UserCreate)
def add_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

@app.get("/users/{user_id}", response_model=UserCreate)
def search_user(user_id: int, db: Session = Depends(get_db)):
    return get_user(db, user_id)

@app.put("/users/{user_id}", response_model=UserCreate)
def update_user_data(user_id: int, user: UserCreate, db: Session = Depends(get_db)):
    return update_user(db, user_id, user)

@app.delete("/users/{user_id}")
def delete_user_data(user_id: int, db: Session = Depends(get_db)):
    delete_user(db, user_id)
    return {"message": "User deleted"}