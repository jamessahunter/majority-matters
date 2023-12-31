const router = require('express').Router();
const { Op } = require('sequelize');

const {User, Question, Answer, Genre, UserAnswer, Room, Team, People} = require('../models');
const {withAuth, areAuth } = require('../utils/auth');
const { findAll } = require('../models/User');

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
//about page
router.get('/about', async (req,res)=> {
  try {
    res.render('about-page', {
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

//gets a random question for the multiplayer room
router.get('/question', async (req,res)=>{
  const dbQuestionData = await Question.findAll({
    where:{
      genre_id: 11,
    }
  });
  const questions = dbQuestionData.map((question)=>question.get({plain:true}));
  let randomNumber = Math.floor(Math.random() * questions.length) ;
  const id=questions[randomNumber].id;
  res.json(id);
}) 

//getst the a random question and its associated answers for a specific genre
//it also redirects the user to the question page
router.get('/genre/:genreId', withAuth,  async( req,res)=>{
  try{
    const dbQuestionData = await Question.findAll({
      where:{
        genre_id: req.params.genreId,
      }
    });
    const questions = dbQuestionData.map((question)=>question.get({plain:true}));
    let randomNumber = Math.floor(Math.random() * questions.length) ;
    const dbAnswerData = await Answer.findAll({
    where: {
      question_id: questions[randomNumber].id,
    }
    });
    const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));
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
//gets all people from the db and responds with all of them
router.get('/people', async(req,res)=>{
  let dbPeopleData = await People.findAll();
  const people = dbPeopleData.map((person)=>person.get({plain:true}));
  res.json(people);
})

//creates the answers for a specific room and question
router.post('/genre/11/:roomCode/:qId', withAuth,  async( req,res)=>{
  console.log(JSON.stringify(req.body.answers[0].answers));
  for(let i=0; i<req.body.answers.length;i++){
    await Answer.create({
      answers: req.body.answers[i].answers,
      total: 0,
      room_code: req.params.roomCode,
      question_id: req.params.qId,
    })
    }
    res.json('created')
});

//deletes the answers for that room and question
router.delete('/genre/11/:roomCode/:qId', withAuth,  async( req,res)=>{
    await Answer.destroy({
      where: {
      question_id: req.params.qId,
      room_code: req.params.roomCode,
      },
    })
    res.json('destroyed')
});
//gets the question and answers and sends to question page
router.get('/genre/11/:roomCode/:qId', withAuth,  async( req,res)=>{
  try{
    const dbQuestionData = await Question.findByPk(req.params.qId);
    const questions = dbQuestionData.get({plain:true});
    console.log(questions);
    const question=questions.question;
    const genreId = 11;
    const dbAnswerData = await Answer.findAll({
      where: {
        question_id: req.params.qId,
        room_code: req.params.roomCode,
      }
      });
      const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));
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

//displays how the user scored
router.get('/scores/:id', withAuth, async(req, res)=>{
    //get the question title to display on score page !!
    const question = await getQuestionText(req.params.id);
    const questionTitle =  question.question;
    const genreId = question.genre_id;
    let dbAnswerData;
    let room_code;
    let team1;
    let team2;
    let user1;
    let user2;
    if(genreId==11){
      //gets all the users for each team
      const dbUserData = await User.findByPk(req.session.userId);
      const user = dbUserData.get({plain:true});
      const dbTeamdata = await Team.findByPk(user.team_id);
      const team = dbTeamdata.get({plain:true});
      const dbRoomData = await Room.findByPk(team.room_id);
      const room = dbRoomData.get({plain:true});
      room_code = room.room_code;
        let dbTeam1data;
        let dbTeam2data;
      if(user.team_id%2===0){
        dbTeam1data = await Team.findByPk(user.team_id-1);
        dbTeam2data = await Team.findByPk(user.team_id);
      } else {
        dbTeam1data = await Team.findByPk(user.team_id);
        dbTeam2data = await Team.findByPk(user.team_id+1);
      }
      team1 = dbTeam1data.get({plain:true});
      team2 = dbTeam2data.get({plain:true});

      const dbUser1Data = await User.findAll({
        where:{
          team_id:team1.id,
        }
      })
        const dbUser2Data = await User.findAll({
          where:{
            team_id:team2.id,
          }
      })
      user1=dbUser1Data.map(user => user.get({plain: true}));
      user2=dbUser2Data.map(user => user.get({plain: true}));
      dbAnswerData = await Answer.findAll({
        where: {
          question_id: req.params.id,
          room_code: room_code,
        }
        });
    } else{
    //gets the question answer and the user answers
    dbAnswerData = await Answer.findAll({
    where: {
      question_id: req.params.id,
    }
    });
  }
    const dbUserAnswerData = await UserAnswer.findAll({
      where: {
        question_id: req.params.id,
        user_id: req.session.userId,
    }
    });
    const answers= dbAnswerData.map((answer)=>answer.get({plain:true}));
    const userAnswers=dbUserAnswerData.map((answer)=>answer.get({plain:true}));
    const correct=[];
    //sorts the user answers based of its total
    answers.sort((a,b)=>b.total-a.total);
    //gives the user 10 points for each answer matched correctly
    let score=0;
    for(let i=0; i<answers.length;i++){
      console.log(req.session.userId);
      if(answers[i].id==userAnswers[i].answer_id){
        correct[i]=true;
        score +=10;
      }else{
        correct[i]=false;
      }
    }
    //updates the user score
    await User.update({user_score: score},{
      where:{
        id: req.session.userId,
      }
      })

    //get user score from user model
    const storedUserScore = await getUserScore(req.session.userId);

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
        },
        order : [['high_score', 'DESC'], ['username', 'ASC']],
      });
      const highScores = dbHighScores.map(score => score.get({plain: true}));
      const isGenreMemes = await isQuestionMeme(req.params.id);
      const loggedIn = req.session.loggedIn;
      res.render('scorepage', {score: score, questionTitle: questionTitle, answers: answers, 
        highScores: highScores, isGenreMemes: isGenreMemes, loggedIn: loggedIn, team1, team2, user1, user2})
    } catch(error) {
      console.log("error : ", error);
    }
})

//checks that a room exists if it does add the user to a team
router.post('/room/:roomCode',async (req,res)=>{
  try{
    const roomCode = req.params.roomCode;
    let room
    let exists= await Room.findOne({
      where: {
        room_code: roomCode,
      }
    })
    let dbTeamData;
    if(exists===null){
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
    const teams=dbTeamData.map((team)=>team.get({plain:true}));
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

//gets the room and its users and sends to the multiplayer page
router.get('/room/:roomCode', async (req,res)=>{
  const roomCode = req.params.roomCode;
  const dbRoomData = await Room.findOne({
    where: {
      room_code: roomCode,
    }
  })
  if(!dbRoomData){
    console.log('not found');
    res.status(404).json('room not found');
    return;
  }
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
    let dbUserData= await User.findAll({
      where: {
        team_id: teams[i].id,
      }
    })

    if(dbUserData[0]!==undefined){
      username = dbUserData.map((user)=>user.get({plain:true}));
      usernames.push(username);
    }
  }
  usernames=usernames.flat();
  const loggedIn = req.session.loggedIn;
  res.render('multiplayer',{roomCode,usernames,loggedIn});
})
//get User score
const getUserScore = async (userId) => {
  if(userId) {
    try {
      const dbUserScore = await User.findByPk(userId);
      const userScore = dbUserScore.get({plain: true});
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
      return question;
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
  