localStorage.clear();

//function for when a user has clicked on make room
const multiHandler= async()=> {
    //generates a random 4 letter code 
    let roomCode='';
    for(let i=0;i<4;i++){
    let randomIndex = Math.floor(Math.random() * 26);
    // Convert the random number to a letter
    let randomLetter = String.fromCharCode(65 + randomIndex);
    roomCode=roomCode+randomLetter;
    }
    //sends a fetch request to make anew room
    const response = await fetch(`/room/${roomCode}`,{
        method: 'POST',
        body: JSON.stringify({roomCode}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        //relocates the user to the team page for that room
        document.location.replace(`/room/${roomCode}`)
      } else {
        alert('Failed to make room.');
      }
};
// function to handle user joining a room
const roomHandler = async(event)=> {
    //prevents default behavoir for the form
    event.preventDefault();
    //gets the entered room code
    const roomCode = document.querySelector('#room-code').value.trim();
    //checks to see a room code has been entered
    if(roomCode){
        //checks to see if the room code exists
        const response = await fetch(`/room/${roomCode}`,{
            method: 'GET'
        });
        if (response.ok) {
            //allows the user to be added to the room
          const response = await fetch(`/room/${roomCode}`,{
            method: 'POST',
            body: JSON.stringify({roomCode}),
            headers: { 'Content-Type': 'application/json' },
          });
            if(response.ok){
                //relocates the user to the team page
                document.location.replace(`/room/${roomCode}`)
            }
        } else {
            alert('Failed to Find Room.');
        }
    }
}
//event listeners
document.querySelector('#multiplayer').addEventListener('click',multiHandler)

document
.querySelector('.room-form')
.addEventListener('submit', roomHandler);