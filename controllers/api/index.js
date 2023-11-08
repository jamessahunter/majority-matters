const router = require('express').Router();

const answerRoutes = require('./answer-routes');

router.use('/answer',answerRoutes);

module.exports = router;
