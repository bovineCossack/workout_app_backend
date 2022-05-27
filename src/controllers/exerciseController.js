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
    const { exId } = req.params;
    const [singleEx] = await exerciseModel.getSingleExerciseDb(exId);

    if (singleEx === false) {
        res.status(500);
        return;
    }
    res.json(singleEx);
}

module.exports = {
    exerciseIndex,
    singleExercise,
};
