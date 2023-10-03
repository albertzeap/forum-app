const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { verifyToken } = require('../middleware/authMiddleware');

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.json({ message: 'Signup successful!' });
    } catch (error) {
        res.status(500).json({ error: 'Error in signup' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            // Generate token here (JWT)
            res.json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error in login' });
    }
});

// Sample protected route
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'You have access to this route!' });
});

module.exports = router;
