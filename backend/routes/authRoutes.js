
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { verifyToken } = require('../middleware/authMiddleware');

// Update user profile route
router.post('/update-profile', verifyToken, async (req, res) => {
  try {
    const { name, password, timezone } = req.body;
    const userId = req.user.id; // Assuming you have a user object in the request

    // Fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's profile fields
    user.name = name;
    user.timezone = timezone;

    // If the user is changing the password, hash and save the new password
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    // Save the updated user object
    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Profile update failed' });
  }
});

module.exports = router;
