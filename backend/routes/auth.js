const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { verifyToken } = require('../middleware/authMiddleware');
const DiscussionController = require("../controllers/DiscussionController");



// Signup
router.post('/signup', UserController.createUser);

// Login
router.post('/login', UserController.getUserByUsername);

//Update profile
router.post('/updateProfile', verifyToken, UserController.updateUserProfile);

// Sample protected route
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'You have access to this route!' });
});

module.exports = router;
