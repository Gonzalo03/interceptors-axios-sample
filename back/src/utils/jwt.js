const jwt = require('jsonwebtoken');

const config = require('../../config');


const createToken = (payload) => {
    return jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, config.jwt.refreshSecret, { expiresIn: config.jwt.refreshExpiresIn });
};

const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
}

module.exports = {
    createToken,
    createRefreshToken,
    verifyToken
};