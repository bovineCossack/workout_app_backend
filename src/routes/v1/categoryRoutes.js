const express = require('express');
const categoryController = require('../../controllers/categoryController');
const { isLoggedIn } = require('../../tools/validationHelper');

const categoryRoutes = express.Router();

categoryRoutes.get('/categories', isLoggedIn, categoryController.categoryIndex);

module.exports = {
    categoryRoutes,
};
