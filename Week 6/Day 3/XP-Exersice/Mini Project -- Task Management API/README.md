# Task Management API

A simple RESTful API for managing tasks using Express.js and JSON file storage.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

The server will run on http://localhost:3000

## API Endpoints

### Get All Tasks
- **GET** `/tasks`
- Returns a list of all tasks

### Get Single Task
- **GET** `/tasks/:id`
- Returns a specific task by ID

### Create Task
- **POST** `/tasks`
- Creates a new task
- Required fields: `title`, `description`
- Optional fields: `status`

Example request body:
```json
{
    "title": "Complete project",
    "description": "Finish the task management API",
    "status": "pending"
}
```

### Update Task
- **PUT** `/tasks/:id`
- Updates an existing task
- Optional fields: `title`, `description`, `status`

Example request body:
```json
{
    "title": "Updated title",
    "description": "Updated description",
    "status": "completed"
}
```

### Delete Task
- **DELETE** `/tasks/:id`
- Deletes a task by ID

## Testing the API

You can test the API using tools like Postman or curl. Here are some example curl commands:

1. Get all tasks:
```bash
curl http://localhost:3000/tasks
```

2. Create a new task:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task","description":"Task description"}'
```

3. Update a task:
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

4. Delete a task:
```bash
curl -X DELETE http://localhost:3000/tasks/1
``` 