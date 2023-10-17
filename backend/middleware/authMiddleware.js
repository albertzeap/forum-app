const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    //console.log('Request headers:', req.headers);
    let token = req.headers.authorization;
    token = token.split(' ')[1];
    //console.log('Received token:', token);
    if (!token) {
        return res.status(403).json({ error: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        console.log(user)
        next();
    });
};

module.exports = { verifyToken };
