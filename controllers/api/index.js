const router = require('express').Router();

const answerRoutes = require('./answer-routes');

router.use('/answer',answerRoutes);

const usersRoutes = require('./user-routes');

router.use('/users', usersRoutes);

module.exports = router;
