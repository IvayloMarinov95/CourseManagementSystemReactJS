const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const decoded = jwt.verify(req.body.token, "secret");
        req.userData = decoded;
    } catch{
        return res.status(401).jsont({
            message: 'Auth failed'
        });
    }
    next();
}