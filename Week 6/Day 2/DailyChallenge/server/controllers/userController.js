const User = require('../models/userModel');
const bcrypt = require('bcrypt');

class UserController {
    // Register a new user
    static async register(req, res) {
        try {
            const { email, username, password, first_name, last_name } = req.body;

            // Validate required fields
            if (!email || !username || !password || !first_name || !last_name) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Check if user already exists
            const existingUser = await User.findByUsername(username);
            if (existingUser) {
                return res.status(400).json({ error: 'Username already exists' });
            }

            // Create new user
            const user = await User.create({
                email,
                username,
                password,
                first_name,
                last_name
            });

            res.status(201).json({
                message: 'User registered successfully',
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    first_name: user.first_name,
                    last_name: user.last_name
                }
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Login user
    static async login(req, res) {
        try {
            const { username, password } = req.body;

            // Validate required fields
            if (!username || !password) {
                return res.status(400).json({ error: 'Username and password are required' });
            }

            // Find user
            const user = await User.findByUsername(username);
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Compare password
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            res.json({
                message: 'Login successful',
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    first_name: user.first_name,
                    last_name: user.last_name
                }
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get all users
    static async getAllUsers(req, res) {
        try {
            const users = await User.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get user by ID
    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update user
    static async updateUser(req, res) {
        try {
            const { email, first_name, last_name } = req.body;
            const userId = req.params.id;

            // Check if user exists
            const existingUser = await User.findById(userId);
            if (!existingUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update user
            const updatedUser = await User.update(userId, {
                email,
                first_name,
                last_name
            });

            res.json({
                message: 'User updated successfully',
                user: updatedUser
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController; 