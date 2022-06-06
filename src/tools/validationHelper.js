const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { failResponse } = require('./responseHelper');
const { verifyJwtToken } = require('./verificationHelper');
const { jwtSecret } = require('../config');

async function validateUser(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(50).required(),
    });

    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        const formatedError = error.details.map((detail) => ({
            message: detail.message,
            field: detail.context.key,
        }));
        failResponse(res, formatedError);
    }
}

async function validateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const tokenGotFromUser =
        authHeader && authHeader.split(' ')[1];
    if (!tokenGotFromUser) {
        return failResponse(res, 'token not found', 401);
    }
    const verifyResult = verifyJwtToken(tokenGotFromUser);
    if (verifyResult === false) {
        return failResponse(res, 'invalid token', 403);
    }
    req.userId = verifyResult.id;
    next();
}

async function isLoggedIn(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        req.token = jwt.verify(token, jwtSecret);
        next();
    } catch (error) {
        res.status(401).send({ error: 'invalid token' });
    }
}

module.exports = {
    validateUser,
    validateToken,
    isLoggedIn,

};
