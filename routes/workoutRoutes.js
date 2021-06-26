const router = require('express').Router();
const { workoutControl } = require('../controller');

router.get('/', workoutControl.getWorkout);

router.post('/', workoutControl.addWorkout);

router.put('/:id', workoutControl.addExercise);

router.get('/range', workoutControl.getMore);

module.exports = router;