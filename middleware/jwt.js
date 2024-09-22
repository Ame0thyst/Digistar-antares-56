const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized', message: 'Token is required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Unauthorized', message: 'Token is required' });
            }
            return res.status(403).json({ error: 'Unauthorized', message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;