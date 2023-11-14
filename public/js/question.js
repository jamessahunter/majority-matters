const socket = io();

//use sortablejs to drag and drop the li
let el = document.getElementById('items');
let sortable = Sortable.create(el);

//get the genre id from the url
let genreId = window.location.toString().split('/')[
    window.location.toString().split('/').length-3
  ];

  //get the question id
const h2Element = document.querySelector('h2');
const id = h2Element.getAttribute('data-qID');

let answered;
//a timer for the multiplayer section to display a countdown starting at 60 seconds
function startTimer(duration,display){
    let timer = duration, seconds;
      // Create a new text node for the "Time Remaining: " text
    let timeRemainingTextNode = document.createTextNode("Time Remaining: ");
    // Append the "Time Remaining: " text node to the display element
    display.appendChild(timeRemainingTextNode);
        setInterval(async function () {
            seconds = parseInt(timer % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            // Create a new text node for the time
            let timeTextNode = document.createTextNode(seconds);
            // Remove any existing content from the display element
            while (display.firstChild) {
                display.removeChild(display.firstChild);
            }
            display.appendChild(timeRemainingTextNode);
            display.appendChild(timeTextNode);
        if(--timer<0 && !answered){  
        //call function answer handler
        await answerHandler();
        answered=true;
        console.log('answered')
        setTimeout(function(){
            //send user to the score page
            localStorage.setItem('load',true);
            socket.emit('relocateUsers');
        },1000)
    }
    },1000)
};
//event listener for page load to start timer if genre is 11
window.addEventListener("load", function() {
    if(genreId==11){
        startTimer(60, timerDisplay);
    }
})
// Assuming you have a timer duration of 60 seconds
const timerDisplay = document.getElementById("timer");
// relocate user if the time is up to the score page
socket.on('usersRelocated', () => {
    let load = localStorage.getItem('load');
    if(load=='false'){
        return
    }else{
        console.log('relocating');
        window.location.href = `/scores/${id}`;
    }
 
});
//function to handle submit or time=0
const answerHandler= async()=>{
    //get the list of answer by how the user has ranked them
    const sortableList = document.getElementById('items');
    const listItems = sortableList.getElementsByTagName('li')
    const arr=[];
    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const answerId = listItem.getAttribute('data-id');
        arr.push(parseInt(answerId));
    }    
    //delete the users answer for that question
    const deleteResponse = await fetch(`/api/users/answer/${id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    //create the user answer for that question
    const createResponse = await fetch(`/api/users/answer/${id}`,{
        method: 'POST',
        body: JSON.stringify({arr, id}),
        headers: { 'Content-Type': 'application/json' },
    });
    if(createResponse.ok){
        console.log('Added');
    }else{
        alert('Failed to add user answers');
    }
    //get the answers from the db
    const getResponse = await fetch(`/api/answer/${id}`,{
        method: 'GET',
    })
    const data = await getResponse.json();
    //for each element in the answer array add to the point total based on the user ranking
    arr.forEach((num, index) => {
        const foundIndex = data.findIndex(item => item.id === num);
        if (foundIndex !== -1) {
          data[foundIndex].total += ((10 - index) * 2);
        }
    });
    //update the totals for the answers
    const updateResponse = await fetch(`/api/answer/${id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    if (updateResponse.ok) {
        //redirect the user to the score page
        if(genreId==11){
            return;
        }else{
            console.log('redirect')
            document.location.replace(`/scores/${id}`)
        }
      } else {
        alert('Failed to Update.');
      }

}



document
.querySelector('.btn')
.addEventListener('click', answerHandler);

