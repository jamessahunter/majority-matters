const router = require('express').Router();
const { Op } = require('sequelize');

const {User, Question, Answer, Rank, Genre, UserAnswer, Room, Team, People} = require('../models');
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
    const genreId = req.params.genreId;
    const id=questions[randomNumber].id;

    //get genre text and use that to display meme images 
    const isGenreMemes = await isGenreMeme(genreId);
    const loggedIn = req.session.loggedIn;
    res.render('question', {question, answers, id, genreId, isGenreMemes, loggedIn});
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/people', async(req,res)=>{
  let dbPeopleData = await People.findAll();
  const people = dbPeopleData.map((person)=>person.get({plain:true}));
  res.json(people);
})

router.post('/genre/11/:roomCode/:qId', withAuth,  async( req,res)=>{
  console.log(JSON.stringify(req.body.answers[0].answers));
  for(let i=0; i<req.body.answers.length;i++){
    await Answer.create({
      answers: req.body.answers[i].answers,
      total: 0,
      question_id: req.params.qId,
    })
    }
    res.json('created')
});

router.delete('/genre/11/:roomCode/:qId', withAuth,  async( req,res)=>{
  // console.log(JSON.stringify(req.body.answers[0].answers));
    await Answer.destroy({
      where: {
      question_id: req.params.qId,
      },
    })
    res.json('destroyed')
});

router.get('/genre/11/:qId', withAuth,  async( req,res)=>{
  try{
    const dbQuestionData = await Question.findByPk(req.params.qId);
    const questions = dbQuestionData.get({plain:true});
    console.log(questions);
    const question=questions.question;
    const genreId = 11;
    const dbAnswerData = await Answer.findAll({
      where: {
        question_id: req.params.qId,
      }
      });
      const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));
      console.log("answers for page")
      console.log(answers);
    const id=req.params.qId;
    //get genre text and use that to display meme images 
    const isGenreMemes = await isGenreMeme(genreId);
    const loggedIn = req.session.loggedIn;
    res.render('question', {question, answers, id, genreId, isGenreMemes, loggedIn});
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
    const answers= dbAnswerData.map((answer)=>answer.get({plain:true}));
    const userAnswers=dbUserAnswerData.map((answer)=>answer.get({plain:true}));
    const correct=[];
    answers.sort((a,b)=>b.total-a.total);
    console.log("answers sorted leat to most popular",answers);
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
      const isGenreMemes = await isQuestionMeme(req.params.id);
      console.log("isGenreMemes : ", isGenreMemes);
      const loggedIn = req.session.loggedIn;
      res.render('scorepage', {score: score, questionTitle: questionTitle, answers: answers, highScores: highScores, isGenreMemes: isGenreMemes, loggedIn: loggedIn})
    } catch(error) {
      console.log("error : ", error);
    }
})



router.post('/room/:roomCode',async (req,res)=>{
  try{
    const roomCode = req.params.roomCode;
    console.log('************ room code '+ roomCode);
    let room
    let exists= await Room.findOne({
      where: {
        room_code: roomCode,
      }
    })
    console.log(exists);
    let dbTeamData;
    if(exists===null){
      console.log('**********create**********')
     dbRoomData = await Room.create({
      room_code: roomCode,
    })
     room = dbRoomData.get({plain:true})

     dbTeamData=[];
     for(let i=0; i<2;i++){
       dbTeamData[i]= await Team.create({
         number: i+1,
         score: 0,
         room_id: room.id,
       })
     }
    }else{
       room = exists.get({plain:true})
      dbTeamData= await Team.findAll({
        where: {
          room_id: room.id,
        }
      })
    }
    console.log(room);


    const teams=dbTeamData.map((team)=>team.get({plain:true}));
    console.log(teams)
    const randomNum = Math.floor(Math.random() * 2);

    await User.update({team_id: teams[randomNum].id},{
      where:{
        id:req.session.userId,
      }
    })
    res.status(200).json('room created');
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
} )


router.get('/room/:roomCode', async (req,res)=>{
  const roomCode = req.params.roomCode;
  const dbRoomData = await Room.findOne({
    where: {
      room_code: roomCode,
    }
  })
  const room = dbRoomData.get({plain:true})
  const dbTeamData = await Team.findAll({
    where: {
      room_id: room.id,
    }
  })
  const teams=dbTeamData.map((team)=>team.get({plain:true}));
  //getting all users from teams and adding sending to web page
  let username;
  let usernames=[]
  for(let i=0;i<teams.length;i++){
    console.log(teams);
    let dbUserData= await User.findAll({
      where: {
        team_id: teams[i].id,
      }
    })

    if(dbUserData[0]!==undefined){
      // console.log('********************')
      // console.log(dbUserData)
      // console.log(dbUserData[0])
      username = dbUserData.map((user)=>user.get({plain:true}));
      console.log(username);
      usernames.push(username);
    }
  }
  console.log('usernames');
  console.log(usernames);
  usernames=usernames.flat();
  console.log(usernames);
  res.render('multiplayer',{roomCode,usernames});
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
const isGenreMeme = async (genreId) => {
  try {
    if(genreId )  {
      const genreDb = await Genre.findByPk(genreId);
      const  genre = genreDb.get({plain: true});
      const isGenreMemes = genre.name === 'Memes';
      return isGenreMemes;
    }
  } catch(error){
   console.log(error);
  }
};

const isQuestionMeme = async (questionId) => {
    try {
    if(questionId )  {
      const questionDb = await Question.findByPk(questionId);
      const  question = questionDb.get({plain: true});
      if(question) {
        return isGenreMeme(question.genre_id);
      }
    }
  } catch(error){
   console.log(error);
  }
};

  module.exports = router;
  