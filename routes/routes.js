const router = require('express').Router();
const { view } = require('../controller');

router.get('/', view.homePage);

router.get('/exercise', view.exercisePage);

router.get('/stats', view.statsPage);

module.exports = router;