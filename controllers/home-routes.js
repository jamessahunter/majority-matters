const router = require('express').Router();

const { Question, Answer, UserAnswer, Genre } = require('../models');
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
  
router.get('/genre/:genreId', withAuth,  async( req,res)=>{
  try{
    const dbQuestionData = await Question.findAll({
      where:{
        genre_id: req.params.genreId,
      }
    });
    const questions = dbQuestionData.map((question)=>question.get({plain:true}));
    console.log(questions);
    let randomNumber = Math.floor(Math.random() * questions.length) ;
    console.log(randomNumber);
    console.log(questions[randomNumber].id);

    const dbAnswerData = await Answer.findAll({
    where: {
      question_id: questions[randomNumber].id,
    }
    });
    const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));
    console.log("answers for page")
    console.log(answers);
    const question=questions[randomNumber].question;
    const genreId = req.params.genreId
    const id=questions[randomNumber].id;
    res.render('question', {question, answers, id, genreId});
  } catch(err){
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
    const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));
    const userAnswers=dbUserAnswerData.map((answer)=>answer.get({plain:true}));
    console.log(answers);
    console.log(userAnswers);
    const correct=[];

    answers.sort((a,b)=>a.total-b.total);
    console.log(answers);
    let score=0;
    for(let i=0; i<answers.length;i++){
      if(answers[i].id==userAnswers[i].answer_id){
        correct[i]=true;
        score +=10;
      }else{
        correct[i]=false;
      }
    }
    console.log(correct);
    console.log(score);
    res.render('scorepage',{score})
})

  module.exports = router;
  