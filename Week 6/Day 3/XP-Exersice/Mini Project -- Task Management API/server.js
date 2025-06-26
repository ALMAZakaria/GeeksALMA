const express = require('express');
const taskRoutes = require('./routes/tasks');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 