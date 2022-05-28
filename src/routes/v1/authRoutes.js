const express = require('express');

const authController = require('../../controllers/authController');

const { validateUser } = require('../../tools/validationHelper');

const authRoutes = express.Router();

authRoutes.post('/register', validateUser, authController.register);
authRoutes.post('/login', validateUser, authController.login);

module.exports = authRoutes;
