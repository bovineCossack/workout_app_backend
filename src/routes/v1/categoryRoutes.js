const express = require('express');
const { isLoggedIn } = require('../../tools/validationHelper');
const categoryController = require('../../controllers/categoryController');

const categoryRoutes = express.Router();

categoryRoutes.get('/categories', isLoggedIn, categoryController.categoryIndex);

module.exports = {
    categoryRoutes,
};
