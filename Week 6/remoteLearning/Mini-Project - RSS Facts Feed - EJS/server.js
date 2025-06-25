const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/pages');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const RSS_URL = 'https://thefactfile.org/feed/';

let allPosts = [];
let allCategories = new Set();

const fetchFeed = async () => {
    try {
        let feed = await parser.parseURL(RSS_URL);
        allPosts = feed.items;
        allPosts.forEach(post => {
            if (post.categories) {
                post.categories.forEach(category => allCategories.add(category));
            }
        });
        console.log('Feed fetched and parsed');
    } catch (error) {
        console.error('Error fetching feed:', error);
    }
};

fetchFeed();
// Refresh feed every hour
setInterval(fetchFeed, 3600000);

app.get('/', (req, res) => {
    res.render('index', { posts: allPosts });
});

app.get('/search', (req, res) => {
    res.render('search', { posts: [], categories: Array.from(allCategories) });
});

app.post('/search/title', (req, res) => {
    const title = req.body.title.toLowerCase();
    const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(title));
    res.render('search', { posts: filteredPosts, categories: Array.from(allCategories) });
});

app.post('/search/category', (req, res) => {
    const category = req.body.category;
    const filteredPosts = allPosts.filter(post => post.categories && post.categories.includes(category));
    res.render('search', { posts: filteredPosts, categories: Array.from(allCategories) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 