const router = require('express').Router();
const usersRoutes = require('./user-routes');
const answerRoutes = require('./answer-routes');

router.use('/answer',answerRoutes);
router.use('/users', usersRoutes);

module.exports = router;
