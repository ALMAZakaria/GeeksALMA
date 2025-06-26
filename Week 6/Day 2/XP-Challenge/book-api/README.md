# Book API

A CRUD API for managing books built with Express.js and PostgreSQL.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a PostgreSQL database named `book_db`

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
DB_USER=your_username
DB_HOST=localhost
DB_NAME=book_db
DB_PASSWORD=your_password
DB_PORT=5432
```

4. Run the database schema:
```bash
psql -U your_username -d book_db -f server/config/schema.sql
```

5. Start the server:
```bash
node app.js
```

## API Endpoints

- GET /api/books - Get all books
- GET /api/books/:bookId - Get a specific book
- POST /api/books - Create a new book

## Example Usage

### Create a new book
```bash
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publishedYear": 1925}'
```

### Get all books
```bash
curl http://localhost:5000/api/books
```

### Get a specific book
```bash
curl http://localhost:5000/api/books/1
``` 