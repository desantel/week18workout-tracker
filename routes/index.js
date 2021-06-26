const router = require('express').Router();

const homeRoutes = require('./routes');
const workoutRoutes = require('./workoutRoutes');

router.use('/', homeRoutes);
router.use('/api/workouts', workoutRoutes);

module.exports = router;