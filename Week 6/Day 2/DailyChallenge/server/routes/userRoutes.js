const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Register a new user
router.post('/register', UserController.register);

// Login user
router.post('/login', UserController.login);

// Get all users
router.get('/users', UserController.getAllUsers);

// Get user by ID
router.get('/users/:id', UserController.getUserById);

// Update user
router.put('/users/:id', UserController.updateUser);

module.exports = router; 