const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController = {

    
    getUserByUsername: async (req, res) => {
        try {
            const { username, password } = req.body;
            console.log(req.body);
            console.log("Username: ", username )
            const user = await User.findOne({ username });

            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                // Generate a JWT token for authenticated users
                const token = jwt.sign({ userId: user._id }, JWT_SECRET);
                res.json({ message: 'Login successful!', token });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
          
        } catch (error) {
            console.error("Error in login: ", error);
            res.status(500).json({ error: 'Error in login' });
        }
    },

    createUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const alreadyExists = await User.findOne({ username });

            if (alreadyExists) {
                return res.status(400).json({ error: "Username is already taken" });
            }

            // Hash the password before saving it in the database
            const hashedPassword = await bcrypt.hash(password, 10);
            
            const user = new User({ username, password: hashedPassword });
            await user.save();
            res.json({ message: 'Signup successful!' });
        } catch (error) {
            console.error("Error in signup: ", error);
            res.status(500).json({ error: 'Error in signup' });
        }
    },

    updateUserByUsername: async (req, res) => {
        try {
            const { username, password } = req.body;
            const userName = req.params.username; // Assuming you pass the user ID in the URL

            // Check if the user exists
            const user = await User.findByUserName(userName);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update user data
            user.username = username;
            user.password = await bcrypt.hash(password, 10); // Hash the new password

            // Save the updated user
            await user.save();

            res.json({ message: 'User updated successfully!' });
        } catch (error) {
            console.error("Error in update user: ", error);
            res.status(500).json({ error: 'Error in update user' });
        }
    },


}

module.exports = UserController;
