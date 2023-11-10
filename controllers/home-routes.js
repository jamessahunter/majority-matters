const router = require('express').Router();
const { Op } = require('sequelize');

const { Question, Answer, UserAnswer, Genre } = require('../models');
const { User } = require('../models');
const {withAuth, areAuth } = require('../utils/auth');

router.get('/', withAuth, async (req,res)=> {
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

    //get genre text and use that to display meme images 
    const genreText = await getQuestionGenreText(genreId);
    const isGenreMemes = genreText === 'Memes';
    console.log("isGenreMemes : ", isGenreMemes);

    res.render('question', {question, answers, id, genreId, isGenreMemes});
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
    const correct=[];

    answers.sort((a,b)=>b.total-a.total);
    //console.log("answers sorted leat to most popular",answers);
    let score=0;
    for(let i=0; i<answers.length;i++){
      if(answers[i].id==userAnswers[i].answer_id){
        correct[i]=true;
        score +=10;
      }else{
        correct[i]=false;
      }
    }
    // sort answer from most popular to least popular
    // answers.sort((a,b)=>b.total-a.total);

    //get the question title to display on score page !!
    const questionTitle = await getQuestionText(req.params.id);
    //get user score from user model
    const storedUserScore = await getUserScore(req.session.userId);
    //console.log("storedUserScore ", storedUserScore);

    // update users score if its null or more than saved score.
    if ( !storedUserScore || storedUserScore < score) {
      await saveUserScore(req.session.userId, score);
    }
    try {
      const dbHighScores = await User.findAll({
        attributes: ['username','high_score'],
        where: {
          high_score: {
            [Op.not]: null,
          }
        }
      });
      const highScores = dbHighScores.map(score => score.get({plain: true}));

      res.render('scorepage', {score, questionTitle, answers, highScores})
    } catch(error) {
      console.log("error : ", error);
    }
})


//get User score
const getUserScore = async (userId) => {
  if(userId) {
    try {
      const dbUserScore = await User.findByPk(userId);
      const userScore = dbUserScore.get({plain: true});
      //console.log("user score from DB : ", userScore.high_score);
      return userScore.high_score;
     } catch(error){
      console.log(error);
     }
  }

};
//save a users score
const saveUserScore = async (userId, score) => {
  try {
    if(userId && score )  {
      const updatedUser = await User.update(
        { high_score: score},
        { where: { id: userId}}
      );
      //console.log("updatedUser : ", updatedUser);
    }
  } catch(error){
   console.log(error);
  }
};

//save a users score
const getQuestionText = async (questionId) => {
  try {
    if(questionId )  {
      const questionDb = await Question.findByPk(questionId);
      const  question = questionDb.get({plain: true});
      //console.log("Question title:  : ", question.question);
      return question.question;
    }
  } catch(error){
   console.log(error);
  }
};

//save a users score
const getQuestionGenreText = async (genreId) => {
  try {
    if(genreId )  {
      const genreDb = await Genre.findByPk(genreId);
      const  genreText = genreDb.get({plain: true});
      console.log("genre Text :: ", genreText.name);
      return genreText.name;
    }
  } catch(error){
   console.log(error);
  }
};

  module.exports = router;
  