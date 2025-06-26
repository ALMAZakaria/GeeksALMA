const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Static files
app.use(express.static('public'));

// Routes
app.use('/quiz', quizRouter);

// Home route
app.get('/', (req, res) => {
    res.redirect('/quiz');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 