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


router.post('/answer/:id', async (req, res)=>{

  try{
    console.log(req.body)
    const ansArr=[];
    for(let i=0;i<req.body.arr.length;i++){
      const dbUserAnswer = await UserAnswer.create({
        answer_id: req.body.arr[i],
        question_id: req.body.id,
      })
      ansArr.push(dbUserAnswer)
    }
    res.status(200).json(ansArr);
  }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.delete('/answer/:id', async (req,res)=>{
    UserAnswer.destroy({
      where: {
        question_id: req.params.id,
      }
    })
    res.json('deleted');
})



router.get('/', async (req,res)=>{
  console.log(req.session.userId)
  res.status(200).json(req.session.userId)
})


router.get('/:roomCode', async (req,res)=>{
  const roomCode = req.params.roomCode;
  console.log(roomCode);
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
        console.log(username);
        usernames.push(username);
  
    }
    console.log('usernames');
    usernames=usernames.flat();
    res.json(usernames);
})


router.put('/:roomCode', async (req,res)=>{
  console.log('***************************' +JSON.stringify(req.body));
  console.log('***************************' +JSON.stringify(req.body[1]));

  try{
    const roomCode = req.params.roomCode;
    console.log('************ room code '+ roomCode);
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
    console.log(teams);
    let username;
  let usernames=[];
  for(let i=0;i<teams.length;i++){
    // console.log(teams);
    let dbUserData= await User.findAll({
      where: {
        team_id: teams[i].id,
      }
    }),
      username = dbUserData.map((user)=>user.get({plain:true}));
      // console.log(username);
      usernames.push(username);
  }
  console.log('*********************** usernames');
  console.log(usernames)
  console.log(JSON.stringify(req.body));
  // console.log(usernames[1])


    for (let i = 0; i < usernames[0].length; i++) {
      const username = usernames[0][i].username;
      
      for (let j = 0; j < req.body.length; j++) {
        if (req.body[j].includes(username)) {
          console.log('match');
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
          console.log('match');
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
