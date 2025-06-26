const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// File path for users.json
const USERS_FILE = path.join(__dirname, 'users.json');

// Initialize users.json if it doesn't exist
async function initializeUsersFile() {
    try {
        await fs.access(USERS_FILE);
    } catch {
        await fs.writeFile(USERS_FILE, '[]');
    }
}

// Read users from file
async function readUsers() {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
}

// Write users to file
async function writeUsers(users) {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

// Routes
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    try {
        const { name, lastName, email, username, password } = req.body;
        
        // Validate required fields
        if (!name || !lastName || !email || !username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const users = await readUsers();
        
        // Check if username already exists
        if (users.some(user => user.username === username)) {
            return res.status(400).json({ message: 'User name already existe' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            id: users.length + 1,
            name,
            lastName,
            email,
            username,
            password: hashedPassword
        };

        users.push(newUser);
        await writeUsers(users);

        res.status(201).json({ message: 'Hey, your account is created now' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const users = await readUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(400).json({ message: 'username is not registred' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.json({ message: `Hey ${username} welcom back` });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        // Remove password from response
        const usersWithoutPassword = users.map(({ password, ...user }) => user);
        res.json(usersWithoutPassword);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const users = await readUsers();
        const user = users.find(u => u.id === parseInt(req.params.id));
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove password from response
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update user
router.put('/users/:id', async (req, res) => {
    try {
        const { name, lastName, email } = req.body;
        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user fields
        users[userIndex] = {
            ...users[userIndex],
            name: name || users[userIndex].name,
            lastName: lastName || users[userIndex].lastName,
            email: email || users[userIndex].email
        };

        await writeUsers(users);
        const { password, ...updatedUser } = users[userIndex];
        res.json(updatedUser);
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Use router
app.use('/', router);

// Initialize and start server
initializeUsersFile().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}); 