const { workout } = require('../models');

async function getWorkout(req, res) {
    try {
        const workouts = await workout.find({}).sort({ day: 1 }).exec();
        res.json(workouts);
    } catch (err) {
        res.json(err);
    }
};

async function getMore(req, res) {
    try {
        const workouts = await workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            },
            { $limit: 7 },
            { $sort: { day: -1 }},
        ])

        console.log(workouts)
        workouts.reverse();
        res.json(workouts);
    } catch (err) {
        res.json(err);
    }
};

async function addWorkout(req, res) {
    try {
        const workouts = await new workout().save();
        res.json(workouts);
    } catch (err) {
        res.json(err);
    }
};

async function addExercise(req, res) {
    try {
        const update = await workout.updateOne(
            { _id: req.params.id },
            { $push: { $exercises: req.body } }
        );
        res.json(update);
    } catch (err) {
        res.json(err);
    }
};

module.exports = {
    getWorkout,
    getMore,
    addWorkout,
    addExercise
};