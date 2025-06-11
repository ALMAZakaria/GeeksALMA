# User Management API

A simple user management API built with Express.js that provides registration and login functionality using JSON file storage.

## Features

- User registration with password hashing
- User login with password verification
- Get all users
- Get user by ID
- Update user information
- Form validation
- Secure password storage using bcrypt

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
- http://localhost:3000/register.html for registration
- http://localhost:3000/login.html for login

## API Endpoints

- POST /register - Register a new user
- POST /login - Login with username and password
- GET /users - Get all users
- GET /users/:id - Get user by ID
- PUT /users/:id - Update user information

## Testing the API

You can test the API using tools like Postman or curl. Here are some example requests:

### Register a new user
```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"name":"John","lastName":"Doe","email":"john@example.com","username":"johndoe","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{"username":"johndoe","password":"password123"}'
```

### Get all users
```bash
curl http://localhost:3000/users
```

### Get user by ID
```bash
curl http://localhost:3000/users/1
```

### Update user
```bash
curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/json" \
-d '{"name":"John","lastName":"Smith","email":"john.smith@example.com"}'
``` 