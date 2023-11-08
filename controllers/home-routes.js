const router = require('express').Router();

const { Question, Answer, UserAnswer } = require('../models');
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
  
router.get('/genre/:genreId/question/:questionId', withAuth,  async( req,res)=>{
  try{
    const dbQuestionData = await Question.findOne({
      where:{
        id: req.params.questionId,
        genre_id: req.params.genreId,
      }
    });
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

router.get('/scores/:id', withAuth, async(req, res)=>{
  const dbAnswerData = await Answer.findAll({
    where: {
      question_id: req.params.id,
    }
    });
    const dbUserAnswerData = await UserAnswer.findAll({
      where: {
        question_id: req.params.id,
    }
    });
    console.log(dbAnswerData);
    console.log(dbUserAnswerData);
    // for(let i=0; i<dbAnswerData.length;i++){
    //   if(dbUserAnswerData)
    // }
})

  module.exports = router;
  