const exerciseModel = require('../models/exerciseModel');

async function exerciseIndex(req, res) {
    const exercise = await exerciseModel.getExerciseDb();
    if (exercise === false) {
        res.status(500);
        return;
    }
    res.json(exercise);
}
async function singleExercise(req, res) {
    const singleExerciseData = await exerciseModel.getSingleExerciseDb(req.params.id);
    if (singleExerciseData === false) {
        res.status(500);
        return;
    }
    res.json(singleExerciseData);
}

module.exports = {
    exerciseIndex,
    singleExercise,
}