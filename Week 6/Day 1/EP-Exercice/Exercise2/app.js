const express = require('express');
const todosRouter = require('./routes/todos');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the todos router
app.use('/todos', todosRouter);

// Start the server
app.listen(port, () => {
  console.log(`Todo List API is running on http://localhost:${port}`);
}); 