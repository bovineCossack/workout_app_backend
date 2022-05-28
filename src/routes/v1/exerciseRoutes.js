const express = require('express');
const exerciseController = require('../../controllers/exerciseController');

const exerciseRoutes = express.Router();

exerciseRoutes.get('/exercises', exerciseController.exerciseIndex);
exerciseRoutes.post('/exercises', exerciseController.createExercise);

module.exports = {
    exerciseRoutes,
};
