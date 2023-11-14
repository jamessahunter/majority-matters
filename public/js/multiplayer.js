//imports socket.io
const socket = io();

const userIds=[];
//gets the room code from the url
let code = window.location.toString().split('/')[
  window.location.toString().split('/').length-1
];
//makes code upper case
code.toUpperCase();
//gets response from server that a user has joined 
socket.on('user joined', (message) => {
  console.log(message);
  //calls user check function
  userCheck();
});

//emits to server that a user has joined
function joinChat(username) {
  socket.emit('join', username);
}
const username = 'JohnDoe';
joinChat(username);
let length;
//function to check that the number of users on the team page matches the number of users in the db for that room
async function userCheck(){
  //gets all user for the room
  const userResponse= await fetch(`/api/users/${code}`,{
    method: 'GET'})
    const usernames= await userResponse.json();
    //gets all users on the page
    const usernamesEl =document.getElementById('usernames');
    const listItems = usernamesEl.getElementsByTagName('li')
  const listItemTexts = [];
  for (let i = 0; i < listItems.length; i++) {
    const text = listItems[i].textContent;
    listItemTexts.push(text);
  }
    localStorage.setItem('length',JSON.stringify(listItemTexts.length))
    length = localStorage.getItem('length');
  //compares the lengths of the two arrays
  if(length!=usernames.length){
    localStorage.setItem('length',JSON.stringify(listItemTexts.length))
    //reloads the page
    location.reload();
  }

}
//uses sortablejs to allow drag and drop between teams
let sortableLists = document.getElementsByClassName('sortable-list');
for (let i = 0; i < sortableLists.length; i++) {
  new Sortable(sortableLists[i], {
    group: 'shared',
    animation: 150
  });
};

let qID;
localStorage.setItem('load', true);
//sends the question number to all other clients for that room
socket.on('getNum',(data)=>{
  //checks that the users are in the room to be relocated
  if(code.toUpperCase()!=data[1].toUpperCase()){
    console.log('return')
    localStorage.setItem('load',false);
  }
  qID=data[0];
})

//function to handle start game
const answerHandler= async()=>{
    //confrim to start game
    let start= confirm(`Please note this will start the game for all players and the teams will be set as on your screen.
    Hit OK to start or cancel to wait`);
    //if they hit cancel return
    if(!start){
      return;
    }
    localStorage.setItem('load', true);
    //get a random question for multiplayer
    const getResponse = await fetch(`/question`,{method: 'GET',})
    if(getResponse.ok){
      qID= await getResponse.json();
      console.log(qID);
    }
    //pass the code to the all the clients on the server
    socket.emit('passNum',[qID, code]);
    //gets the users that are on each team
    const sort1 =document.getElementById('list1');
    const sort2 =document.getElementById('list2');
    const listItems1 = sort1.getElementsByTagName('li')
    const listItems2 = sort2.getElementsByTagName('li')
    let listItem1=[];
    let listItem2=[];
    for (let i = 0; i < listItems1.length; i++) {
        listItem1[i]=(listItems1[i].textContent);
    }
    for (let i = 0; i < listItems2.length; i++) {
        listItem2[i]=(listItems2[i].textContent);
    }
    if(listItem1.length+listItem2.length<4){
      alert("Must have at least 4 players");
      return;
    }
    if(listItem1.length-listItem2.length>1 || listItem1.length-listItem2.length<-1){
        alert('Teams must be similar size');
        return;
    }
    //updates the teams based on how they are on the page
    const updateResponse = await fetch(`/api/users/${code}`,{
      method: 'PUT',
      body: JSON.stringify([listItem1,listItem2]),
      headers: { 'Content-Type': 'application/json' },
  })
  if(updateResponse.ok){
    
  }
  //get all users for the room
  const userResponse= await fetch(`/api/users/${code}`,{
  method: 'GET'})
  const usernames= await userResponse.json();
  //get all people from the db
  const peopleResponse= await fetch(`/people`,{
    method: 'GET'})
  const people = await peopleResponse.json();
  //if there aren't 8 users add random people 
  if(usernames.length<8){
    const length=usernames.length
    for(let i=0;i<8-length;i++){
      let randomPeople = Math.floor(Math.random() * people.length);
      let temp=people[randomPeople];
      while(usernames.includes(temp)){
        temp=people[randomPeople];
        randomPeople = Math.floor(Math.random() * people.length);
      }
      usernames.push(temp);
    }
  }
  const answers=usernames;
  for(let i=0; i<answers.length;i++){
    if(answers[i].username){
      answers[i].answers=answers[i].username;
    }else{
      answers[i].answers=answers[i].name;
    }
  }
  //delete the answers for the room and that question
  const deleteResponse = await fetch(`/genre/11/${code}/${qID}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  //create the answer for that question which are the usernames of the people playing
  const createResponse = await fetch(`/genre/11/${code}/${qID}`,{
    method: 'POST',
    body: JSON.stringify({answers}),
    headers: { 'Content-Type': 'application/json' },
  })
  // Redirect to a different page
  if (createResponse.ok){
    //call to server to relocate users
    socket.emit('relocateUsers');
  }
}
//listening for userRelocated from the server
socket.on('usersRelocated', () => {
    //if the call is from a seperate room just return
    let load = localStorage.getItem('load');;
    if(load=='false'){
      return;
    }else{
      localStorage.setItem('load', false);
      //relocate the user to the question page
      console.log('relocating');
      window.location.href = `/genre/11/${code}/${qID}`;
    }
});

//event listenter for start games
document
.querySelector('.btn')
.addEventListener('click', answerHandler);