// const { response } = require("express");

const socket = io();
const userIds=[];
const code = window.location.toString().split('/')[
  window.location.toString().split('/').length-1
];
socket.on('user joined', (message) => {
  console.log(message);
  userCheck();
});

function joinChat(username) {
  socket.emit('join', username);
}

const username = 'JohnDoe';
joinChat(username);

async function userCheck(){
  const getResponse = await fetch(`/api/users/`,{
    method: 'GET',
  })
  const data = await getResponse.json();
  let userIds = localStorage.getItem('userIds');
  if (!userIds) {
    userIds = [];
  } else {
    userIds = JSON.parse(userIds);
  }

  if (!userIds.includes(data)) {
    userIds.push(data);
    localStorage.setItem('userIds', JSON.stringify(userIds));
    location.reload();
  }
  console.log(data);
  console.log(userIds)

  }



let sortableLists = document.getElementsByClassName('sortable-list');
for (let i = 0; i < sortableLists.length; i++) {
  new Sortable(sortableLists[i], {
    group: 'shared',
    animation: 150
  });
};

const answerHandler= async()=>{
    const sort1 =document.getElementById('list1');
    const sort2 =document.getElementById('list2');
    const listItems1 = sort1.getElementsByTagName('li')
    const listItems2 = sort2.getElementsByTagName('li')
    let listItem1=[];
    let listItem2=[];
    for (let i = 0; i < listItems1.length; i++) {
        listItem1[i]=(listItems1[i].textContent);
        // console.log(listItem1.textContent);
    }
    for (let i = 0; i < listItems2.length; i++) {
        listItem2[i]=(listItems2[i].textContent);
    }
    if(listItem1.length+listItem2.length<4){
      alert("Must have atleast 4 players");
    }
    if(listItem1.length-listItem2.length>1 || listItem1.length-listItem2.length<-1){
        alert('Teams must be similar size');
        return;
    }
    console.log(listItem1)
    console.log(listItem2)


    const updateResponse = await fetch(`/api/users/${code}`,{
      method: 'PUT',
      body: JSON.stringify([listItem1,listItem2]),
      headers: { 'Content-Type': 'application/json' },
  })
  if(updateResponse.ok){
    socket.emit('relocateUsers');
  }
}
let randomNumber;
socket.on('usersRelocated', async() => {
  
  const userResponse= await fetch(`/api/users/${code}`,{
  method: 'GET'})
  const usernames= await userResponse.json();
  console.log(usernames);
  const peopleResponse= await fetch(`/people`,{
    method: 'GET'})
  const people = await peopleResponse.json();
  console.log(people);
  if(usernames.length<8){
      
    console.log(people);
    console.log(8-usernames.length)
    const length=usernames.length
    for(let i=0;i<8-length;i++){
      // console.log(i);
      randomNumber = Math.floor(Math.random() * people.length);
      // console.log(randomNumber);
      let temp=people[randomNumber];
      console.log(usernames.includes(temp))
      while(usernames.includes(temp)){
        temp=people[randomNumber];
        randomNumber = Math.floor(Math.random() * people.length);
      }
      usernames.push(temp);
    }
  }
  console.log(usernames)
  const answers=usernames;

  for(let i=0; i<answers.length;i++){
    if(answers[i].username){
      answers[i].answers=answers[i].username;
    }else{
      answers[i].answers=answers[i].name;
    }
  }
  console.log(answers)
  randomNumber = Math.floor(Math.random() * 3) +30;

  const deleteResponse = await fetch(`/genre/11/${code}/${randomNumber}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })

  const createResponse = await fetch(`/genre/11/${code}/${randomNumber}`,{
    method: 'POST',
    body: JSON.stringify({answers}),
    headers: { 'Content-Type': 'application/json' },
  })
  // Redirect to a different page
  window.location.href = `/genre/11/${randomNumber}`;
});

document
.querySelector('.btn')
.addEventListener('click', answerHandler);