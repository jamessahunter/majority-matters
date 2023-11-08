const router = require('express').Router();

const { User } = require('../models');
const {withAuth, areAuth } = require('../utils/auth');

router.get('/', async (req,res)=> {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }

})

router.get('/login', areAuth, (req, res) => {
    res.render('login');
  });
  
  module.exports = router;
  