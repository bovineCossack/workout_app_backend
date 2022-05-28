const { getExerciseDb, insertExerciseToDb } = require('../models/exerciseModel');
const { failResponse, successResponse } = require('../tools/responseHelper');


async function exerciseIndex(req, res) {
    const foundExercises = await getExerciseDb();
    return foundExercises === false
        ? failResponse(res)
        : successResponse(res, foundExercises);
}

async function createExercise(req, res) {
    const newExerciseData = req.body;
    const { name, category1, category2 } = newExerciseData;
    const exerciseResult = await insertExerciseToDb(newExerciseData);
    if (exerciseResult === false) {
        res.status(500);
        return;
    }
    res.json(exerciseResult);
}

module.exports = {
    exerciseIndex,
    createExercise,
};
