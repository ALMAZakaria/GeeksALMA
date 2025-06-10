const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Emoji database
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🐼', name: 'Panda' },
    { emoji: '🦊', name: 'Fox' },
    { emoji: '🐨', name: 'Koala' },
    { emoji: '🦒', name: 'Giraffe' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🐯', name: 'Tiger' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🐼', name: 'Panda' },
    { emoji: '🦊', name: 'Fox' }
];

// Game state
let currentEmoji = null;
let options = [];
let scores = [];

// Helper function to get random options
function getRandomOptions(correctAnswer, count = 3) {
    const allNames = emojis.map(e => e.name);
    const wrongOptions = allNames.filter(name => name !== correctAnswer);
    const shuffled = wrongOptions.sort(() => 0.5 - Math.random());
    return [correctAnswer, ...shuffled.slice(0, count)].sort(() => 0.5 - Math.random());
}

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get new emoji and options
app.get('/api/game/new', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    currentEmoji = emojis[randomIndex];
    options = getRandomOptions(currentEmoji.name);
    
    res.json({
        emoji: currentEmoji.emoji,
        options: options
    });
});

// Submit guess
app.post('/api/game/guess', (req, res) => {
    const { guess, playerName } = req.body;
    const isCorrect = guess === currentEmoji.name;
    
    if (isCorrect) {
        const existingScore = scores.find(s => s.name === playerName);
        if (existingScore) {
            existingScore.score += 1;
        } else {
            scores.push({ name: playerName, score: 1 });
        }
    }
    
    res.json({
        correct: isCorrect,
        correctAnswer: currentEmoji.name,
        scores: scores.sort((a, b) => b.score - a.score).slice(0, 10)
    });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    res.json(scores.sort((a, b) => b.score - a.score).slice(0, 10));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 