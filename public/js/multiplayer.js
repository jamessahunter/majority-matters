
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

socket.on('usersRelocated', () => {
  // Redirect to a different page
  window.location.href = `/genre/11/${code}`;
});

document
.querySelector('.btn')
.addEventListener('click', answerHandler);