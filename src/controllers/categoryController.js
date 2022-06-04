const { getCategoryDb } = require('../models/categoryModel');
const { failResponse, successResponse } = require('../tools/responseHelper');

async function categoryIndex(req, res) {
    const foundCategories = await getCategoryDb();
    return foundCategories === false
        ? failResponse(res)
        : successResponse(res, foundCategories);
}

module.exports = { categoryIndex };
