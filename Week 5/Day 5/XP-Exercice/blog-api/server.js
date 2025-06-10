const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Simulated database
let posts = [
    {
        id: 1,
        title: "First Blog Post",
        content: "This is the content of the first blog post."
    },
    {
        id: 2,
        title: "Second Blog Post",
        content: "This is the content of the second blog post."
    }
];

// GET all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET single post by id
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});

// POST new post
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT update post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    
    res.json(post);
});

// DELETE post
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    
    const deletedPost = posts.splice(postIndex, 1);
    res.json(deletedPost[0]);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 