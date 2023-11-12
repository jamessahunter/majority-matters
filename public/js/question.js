const socket = io();

var el = document.getElementById('items');
var sortable = Sortable.create(el);

localStorage.clear();

let genreId = window.location.toString().split('/')[
    window.location.toString().split('/').length-2
  ];
console.log(genreId);
const h2Element = document.querySelector('h2');
const id = h2Element.getAttribute('data-qID');
console.log(id);

function startTimer(duration,display){
    let timer = duration, minutes, seconds;
      // Create a new text node for the "Time Remaining: " text
    let timeRemainingTextNode = document.createTextNode("Time Remaining: ");

    // Append the "Time Remaining: " text node to the display element
    display.appendChild(timeRemainingTextNode);
        setInterval(async function () {
            // minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            // minutes
            seconds = seconds < 10 ? "0" + seconds : seconds;
            // Create a new text node for the time
            let timeTextNode = document.createTextNode(seconds);

            // Remove any existing content from the display element
            while (display.firstChild) {
                display.removeChild(display.firstChild);
            }
        
            // Append the "Time Remaining: " text node and the time text node to the display element
            display.appendChild(timeRemainingTextNode);
            display.appendChild(timeTextNode);
        if(--timer<0){  
        await answerHandler();
        console.log('answered')
        setTimeout(function(){
            socket.emit('relocateUsers');
        },1000)
    }
    },1000)
};

window.addEventListener("load", function() {
    if(genreId==11){
        startTimer(10, timerDisplay);
    }
})
// Assuming you have a timer duration of 60 seconds
const timerDisplay = document.getElementById("timer");

socket.on('usersRelocated', () => {
    console.log('relocating');
  window.location.href = `/scores/${id}`;
});

const answerHandler= async()=>{
    const sortableList = document.getElementById('items');
    const listItems = sortableList.getElementsByTagName('li')
    const arr=[];
    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const answerId = listItem.getAttribute('data-id');
        arr.push(parseInt(answerId));
    }    
    // console.log(typeof arr[0]);
    const deleteResponse = await fetch(`/api/users/answer/${id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

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

    
    const getResponse = await fetch(`/api/answer/${id}`,{
        method: 'GET',
    })
    const data = await getResponse.json();

    arr.forEach((num, index) => {
        const foundIndex = data.findIndex(item => item.id === num);
        if (foundIndex !== -1) {
          data[foundIndex].total += ((10 - index) * 2);
        }
    });
    

    const updateResponse = await fetch(`/api/answer/${id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    // console.log(updateResponse);
    if (updateResponse.ok) {
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

