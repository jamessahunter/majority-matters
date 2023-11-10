//  const module =require('/socket.io-client');

const socket = io('http://localhost:3001');

// Listen for a 'userJoined' event from the server
socket.on('userJoined', (connectedUsers) => {
    console.log('A new user joined the page');
    // Refresh the page
    location.reload();
  });
  
  // Listen for a 'userLeft' event from the server
  socket.on('userLeft', (connectedUsers) => {
    console.log('A user left the page');
  });
  
  // Send a 'joinPage' event to the server when the page loads
  socket.emit('joinPage');


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
    
    if(listItem1.length-listItem2.length>1 || listItem1.length-listItem2.length<-1){
        alert('Teams must be similar size');
        return;
    }
    console.log(listItem1)
    console.log(listItem2)
}

document
.querySelector('.btn')
.addEventListener('click', answerHandler);