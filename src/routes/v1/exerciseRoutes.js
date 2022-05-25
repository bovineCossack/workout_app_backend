const express = require('express');
const exControl = require('../../controllers/exerciseController');

const exRoutes = express.Router();

exRoutes.get('/', exControl.exerciseIndex);

module.exports = exRoutes;