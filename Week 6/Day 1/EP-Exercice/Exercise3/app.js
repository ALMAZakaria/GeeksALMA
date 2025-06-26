const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the books router
app.use('/books', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Books API is running on http://localhost:${port}`);
}); 