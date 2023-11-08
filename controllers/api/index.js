const router = require('express').Router();
const usersRoutes = require('./user-routes');

router.use('/users', usersRoutes);

module.exports = router;