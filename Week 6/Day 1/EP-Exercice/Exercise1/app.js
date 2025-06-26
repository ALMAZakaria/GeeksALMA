const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the router
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 