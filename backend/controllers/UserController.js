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

            if (user && await bcrypt.compare(password, user.password)) {
                // Generate token here (JWT)
                const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

                res.json({ message: 'Login successful!', token: token });
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
            const alreadyExists = await User.findOne({username});

            if(!alreadyExists){
                const user = new User({ username, password });
                await user.save();
                res.json({ message: 'Signup successful!' });
            } else {
                res.json({message : "Looks like that username is taken"})
            }

        } catch (error) {
            res.status(500).json({ error: 'Error in signup' });
        }
    }
}


module.exports = UserController;