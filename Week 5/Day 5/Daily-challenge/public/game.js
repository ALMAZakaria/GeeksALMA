let playerName = '';
let playerScore = 0;

// DOM Elements
const playerNameInput = document.getElementById('playerName');
const startGameButton = document.getElementById('startGame');
const gameContent = document.querySelector('.game-content');
const currentEmoji = document.getElementById('currentEmoji');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const playerScoreDisplay = document.getElementById('playerScore');
const leaderboardList = document.getElementById('leaderboardList');

// Event Listeners
startGameButton.addEventListener('click', startGame);

// Functions
async function startGame() {
    playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert('Please enter your name to start the game!');
        return;
    }
    
    gameContent.style.display = 'block';
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    await loadNewEmoji();
    updateLeaderboard();
}

async function loadNewEmoji() {
    try {
        const response = await fetch('/api/game/new');
        const data = await response.json();
        
        currentEmoji.textContent = data.emoji;
        displayOptions(data.options);
    } catch (error) {
        console.error('Error loading new emoji:', error);
        feedback.textContent = 'Error loading new emoji. Please try again.';
    }
}

function displayOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.addEventListener('click', () => submitGuess(option));
        optionsContainer.appendChild(button);
    });
}

async function submitGuess(guess) {
    try {
        const response = await fetch('/api/game/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guess,
                playerName
            })
        });
        
        const data = await response.json();
        
        if (data.correct) {
            feedback.textContent = 'Correct! 🎉';
            feedback.className = 'feedback correct';
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else {
            feedback.textContent = `Wrong! The correct answer was: ${data.correctAnswer}`;
            feedback.className = 'feedback incorrect';
        }
        
        updateLeaderboard(data.scores);
        
        // Wait for 1.5 seconds before loading the next emoji
        setTimeout(loadNewEmoji, 1500);
    } catch (error) {
        console.error('Error submitting guess:', error);
        feedback.textContent = 'Error submitting guess. Please try again.';
    }
}

async function updateLeaderboard(scores = null) {
    try {
        if (!scores) {
            const response = await fetch('/api/leaderboard');
            scores = await response.json();
        }
        
        leaderboardList.innerHTML = '';
        scores.forEach(score => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${score.name}</span>
                <span>${score.score}</span>
            `;
            leaderboardList.appendChild(li);
        });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
    }
} 