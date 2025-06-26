const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a single book by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  res.json(book);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author, year } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year: year || new Date().getFullYear()
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;
  
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  books[bookIndex] = {
    ...books[bookIndex],
    title: title || books[bookIndex].title,
    author: author || books[bookIndex].author,
    year: year || books[bookIndex].year
  };
  
  res.json(books[bookIndex]);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  const deletedBook = books.splice(bookIndex, 1)[0];
  res.json(deletedBook);
});

module.exports = router; 