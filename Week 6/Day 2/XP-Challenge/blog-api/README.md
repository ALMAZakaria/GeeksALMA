# Blog API

A RESTful API for a blog platform built with Express.js and PostgreSQL.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a PostgreSQL database named `blog_db`

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
DB_USER=your_username
DB_HOST=localhost
DB_NAME=blog_db
DB_PASSWORD=your_password
DB_PORT=5432
```

4. Run the database schema:
```bash
psql -U your_username -d blog_db -f server/config/schema.sql
```

5. Start the server:
```bash
node server.js
```

## API Endpoints

- GET /posts - Get all blog posts
- GET /posts/:id - Get a specific blog post
- POST /posts - Create a new blog post
- PUT /posts/:id - Update a blog post
- DELETE /posts/:id - Delete a blog post

## Example Usage

### Create a new post
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Post", "content": "Hello, World!"}'
```

### Get all posts
```bash
curl http://localhost:3000/posts
```

### Get a specific post
```bash
curl http://localhost:3000/posts/1
```

### Update a post
```bash
curl -X PUT http://localhost:3000/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "Updated content"}'
```

### Delete a post
```bash
curl -X DELETE http://localhost:3000/posts/1
``` 