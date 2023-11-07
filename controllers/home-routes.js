const router = require('express').Router();

const {withAuth, areAuth } = require('../utils/auth');

router.get('/',(req,res)=> {
  res.render('homepage');
})

router.get('/login', areAuth, (req, res) => {
    res.render('login');
  });
  
  module.exports = router;
  