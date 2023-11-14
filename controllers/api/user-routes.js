const router = require("express").Router();
const { User, UserAnswer, Room, Team } = require("../../models");

//create a new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      high_score: null,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//creates the user answer for a specifc question tied to that user
router.post('/answer/:id', async (req, res)=>{

  try{
    console.log(req.body)
    const ansArr=[];
    for(let i=0;i<req.body.arr.length;i++){
      const dbUserAnswer = await UserAnswer.create({
        answer_id: req.body.arr[i],
        question_id: req.body.id,
        user_id: req.session.userId,
      })
      ansArr.push(dbUserAnswer)
    }
    res.status(200).json(ansArr);
  }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
})
//delets the user answer for a specific question
router.delete('/answer/:id', async (req,res)=>{
    UserAnswer.destroy({
      where: {
        question_id: req.params.id,
        user_id: req.session.userId,
      }
    })
    res.json('deleted');
})

//gets a specific user
router.get('/', async (req,res)=>{
  const dbUserData = await User.findByPk(req.session.userId);
  const user = dbUserData.get({plain:true});
  res.status(200).json([user, req.session.userId]);
})

//gets all the users for a specific room code
router.get('/:roomCode', async (req,res)=>{
  const roomCode = req.params.roomCode;
    const dbRoomData = await Room.findOne({
      where: {
        room_code: roomCode,
      }
    })
    console.log(dbRoomData);
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
        username = dbUserData.map((user)=>user.get({plain:true}));
        usernames.push(username);
    }
    usernames=usernames.flat();
    res.json(usernames);
})

//updates the teams for a specific room
router.put('/:roomCode', async (req,res)=>{
  try{
    const roomCode = req.params.roomCode;
    const dbRoomData= await Room.findOne({
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
  let usernames=[];
  for(let i=0;i<teams.length;i++){
    let dbUserData= await User.findAll({
      where: {
        team_id: teams[i].id,
      }
    }),
      username = dbUserData.map((user)=>user.get({plain:true}));
      usernames.push(username);
  }
    for (let i = 0; i < usernames[0].length; i++) {
      const username = usernames[0][i].username;
      
      for (let j = 0; j < req.body.length; j++) {
        if (req.body[j].includes(username)) {
          if(j===0){
            console.log(req.body[j]);
            await User.update({team_id: teams[0].id},{
              where:{
                id:usernames[0][i].id,
              }
            })
          }else{
            await User.update({team_id: teams[1].id},{
              where:{
                id:usernames[0][i].id,
              }
            })
          }
        }
      }
    }
    for (let i = 0; i < usernames[1].length; i++) {
      const username = usernames[1][i].username;
      
      for (let j = 0; j < req.body.length; j++) {
        if (req.body[j].includes(username)) {
          if(j===0){
            await User.update({team_id: teams[0].id},{
              where:{
                id:usernames[1][i].id,
              }
            })
          }else{
            await User.update({team_id: teams[1].id},{
              where:{
                id:usernames[1][i].id,
              }
            })
          }
        }
      }
    }
    res.status(200).json('Teams updated');

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;
