const express = require('express');
const exerciseController = require('../../controllers/exerciseController');

const exerciseRoutes = express.Router();

exerciseRoutes.get('/exercises', exerciseController.exerciseIndex);

module.exports = {
    exerciseRoutes,
};
