const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();

// GET posts from JSONPlaceholder
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('Successfully retrieved posts from JSONPlaceholder');
        res.json(posts);
    } catch (error) {
        console.error('Error in /api/posts route:', error.message);
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 