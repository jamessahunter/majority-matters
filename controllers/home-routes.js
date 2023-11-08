const router = require('express').Router();

const { Question, Answer } = require('../models');
const {withAuth, areAuth } = require('../utils/auth');

router.get('/',(req,res)=> {
  res.render('homepage');
})

router.get('/login', areAuth, (req, res) => {
    res.render('login');
  });
  
router.get('/genre/question/:id', async( req,res)=>{
  try{
    const dbQuestionData = await Question.findByPk(req.params.id);
    const question = dbQuestionData.get({plain:true});
    const dbAnswerData = await Answer.findAll({
    where: {
      question_id: req.params.id,
    }
    });
    const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));
    console.log("answers for page")
    console.log(answers);
    res.render('question', {question, answers});
  } catch{
    console.log(err);
    res.status(500).json(err);
  }
})

  module.exports = router;
  