
const socket = io();
const userIds=[];
let code = window.location.toString().split('/')[
  window.location.toString().split('/').length-1
];
code.toUpperCase();
socket.on('user joined', (message) => {
  console.log(message);
  userCheck();
});
function joinChat(username) {
  socket.emit('join', username);
}
const username = 'JohnDoe';
joinChat(username);
let length;
async function userCheck(){
  const userResponse= await fetch(`/api/users/${code}`,{
    method: 'GET'})
    const usernames= await userResponse.json();
    const usernamesEl =document.getElementById('usernames');
    const listItems = usernamesEl.getElementsByTagName('li')
  // const listItems = document.querySelectorAll('li');
  const listItemTexts = [];
  for (let i = 0; i < listItems.length; i++) {
    const text = listItems[i].textContent;
    listItemTexts.push(text);
  }
    localStorage.setItem('length',JSON.stringify(listItemTexts.length))
    length = localStorage.getItem('length');
  //remove +4 when deployed
  if(length!=usernames.length){
    console.log('stuck');
    localStorage.setItem('length',JSON.stringify(listItemTexts.length))
    location.reload();
  }

}

let sortableLists = document.getElementsByClassName('sortable-list');
for (let i = 0; i < sortableLists.length; i++) {
  new Sortable(sortableLists[i], {
    group: 'shared',
    animation: 150
  });
};

// let randomNumber = Math.floor(Math.random() * 3) +31;
let qID;
localStorage.setItem('load', true);
socket.on('getNum',(data)=>{
  if(code.toUpperCase()!=data[1].toUpperCase()){
    console.log('return')
    localStorage.setItem('load',false);
  }
  qID=data[0];
})


const answerHandler= async()=>{
    let start= confirm(`Please note this will start the game for all players and the teams will be set as on your screen.
    Hit OK to start or cancel to wait`);
    if(!start){
      return;
    }
    localStorage.setItem('load', true);
    const getResponse = await fetch(`/question`,{method: 'GET',})
    if(getResponse.ok){
      qID= await getResponse.json();
      console.log(qID);
    }
    console.log('room code ' +code);
    socket.emit('passNum',[qID, code]);
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
    const updateResponse = await fetch(`/api/users/${code}`,{
      method: 'PUT',
      body: JSON.stringify([listItem1,listItem2]),
      headers: { 'Content-Type': 'application/json' },
  })
  if(updateResponse.ok){
    
  }

  const userResponse= await fetch(`/api/users/${code}`,{
  method: 'GET'})
  const usernames= await userResponse.json();
  const peopleResponse= await fetch(`/people`,{
    method: 'GET'})
  const people = await peopleResponse.json();
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
  const deleteResponse = await fetch(`/genre/11/${code}/${qID}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  const createResponse = await fetch(`/genre/11/${code}/${qID}`,{
    method: 'POST',
    body: JSON.stringify({answers}),
    headers: { 'Content-Type': 'application/json' },
  })
  // Redirect to a different page
  if (createResponse.ok){
    socket.emit('relocateUsers');
  }
}
  socket.on('usersRelocated', () => {
    let load = localStorage.getItem('load');
    console.log(load);
    console.log(!load);
    if(load=='false'){
      console.log('no load');
      return;
    }else{
      localStorage.setItem('load', false);
      console.log('relocating');
      window.location.href = `/genre/11/${code}/${qID}`;
    }
});

document
.querySelector('.btn')
.addEventListener('click', answerHandler);