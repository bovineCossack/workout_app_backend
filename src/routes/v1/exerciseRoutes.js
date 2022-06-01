const express = require('express');
const exerciseController = require('../../controllers/exerciseController');
const { isLoggedIn, validateToken } = require('../../tools/validationHelper');

const exerciseRoutes = express.Router();

exerciseRoutes.get('/exercises', isLoggedIn, validateToken, exerciseController.exerciseIndex);
exerciseRoutes.post('/exercises', isLoggedIn, validateToken, exerciseController.createExercise);
exerciseRoutes.delete('/exercises/:id', isLoggedIn, validateToken, exerciseController.deleteExercise);

module.exports = {
    exerciseRoutes,
};
