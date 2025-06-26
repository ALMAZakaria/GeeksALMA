const express = require('express');
const router = express.Router();

// Trivia questions
const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

// Store user session data
const userSessions = new Map();

// Generate a unique session ID
function generateSessionId() {
    return Math.random().toString(36).substring(2, 15);
}

// Initialize or get user session
function getUserSession(sessionId) {
    if (!userSessions.has(sessionId)) {
        userSessions.set(sessionId, {
            currentQuestionIndex: 0,
            score: 0,
            completed: false
        });
    }
    return userSessions.get(sessionId);
}

// GET /quiz - Start the quiz
router.get('/', (req, res) => {
    const sessionId = req.query.sessionId || generateSessionId();
    const session = getUserSession(sessionId);
    
    if (session.completed) {
        return res.redirect(`/quiz/score?sessionId=${sessionId}`);
    }

    const currentQuestion = triviaQuestions[session.currentQuestionIndex];
    res.render('quiz', {
        question: currentQuestion.question,
        questionNumber: session.currentQuestionIndex + 1,
        totalQuestions: triviaQuestions.length,
        sessionId: sessionId
    });
});

// POST /quiz - Submit answer
router.post('/', (req, res) => {
    const { answer, sessionId } = req.body;
    const session = getUserSession(sessionId);
    
    if (session.completed) {
        return res.redirect(`/quiz/score?sessionId=${sessionId}`);
    }

    const currentQuestion = triviaQuestions[session.currentQuestionIndex];
    const isCorrect = answer.toLowerCase() === currentQuestion.answer.toLowerCase();
    
    if (isCorrect) {
        session.score++;
    }

    session.currentQuestionIndex++;
    
    if (session.currentQuestionIndex >= triviaQuestions.length) {
        session.completed = true;
        return res.redirect(`/quiz/score?sessionId=${sessionId}`);
    }

    res.render('feedback', {
        isCorrect,
        correctAnswer: currentQuestion.answer,
        sessionId: sessionId
    });
});

// GET /quiz/score - Show final score
router.get('/score', (req, res) => {
    const { sessionId } = req.query;
    const session = getUserSession(sessionId);
    
    res.render('score', {
        score: session.score,
        totalQuestions: triviaQuestions.length,
        sessionId: sessionId
    });
});

module.exports = router; 