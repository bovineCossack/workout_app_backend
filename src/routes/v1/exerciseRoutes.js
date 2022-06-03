const express = require('express');
const exerciseController = require('../../controllers/exerciseController');
const { isLoggedIn } = require('../../tools/validationHelper');

const exerciseRoutes = express.Router();

exerciseRoutes.get('/exercises', isLoggedIn, exerciseController.exerciseIndex);
exerciseRoutes.post('/exercises', isLoggedIn, exerciseController.createExercise);
exerciseRoutes.delete('/exercises/:id', isLoggedIn, exerciseController.deleteExercise);

module.exports = {
    exerciseRoutes,
};
