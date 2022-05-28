const { getExerciseDb } = require('../models/exerciseModel');
const { failResponse, successResponse } = require('../tools/responseHelper');

// async function exerciseIndex(req, res) {
//     const exercise = await exerciseModel.getExerciseDb();
//     if (exercise === false) {
//         res.status(500);
//         return;
//     }
//     res.json(exercise);
// }

async function exerciseIndex(req, res) {
    const foundProducts = await getExerciseDb();
    return foundProducts === false
        ? failResponse(res)
        : successResponse(res, foundProducts);
}


module.exports = {
    exerciseIndex,
};
