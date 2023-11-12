const multiHandler= async()=> {
        
    let roomCode='';
    for(let i=0;i<4;i++){
    let randomIndex = Math.floor(Math.random() * 26);

    // Convert the random number to a letter
    let randomLetter = String.fromCharCode(65 + randomIndex);
    roomCode=roomCode+randomLetter;
    }
    console.log(roomCode);

    const response = await fetch(`/room/${roomCode}`,{
        method: 'POST',
        body: JSON.stringify({roomCode}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace(`/room/${roomCode}`)
      } else {
        alert('Failed to make room.');
      }
};

const roomHandler = async(event)=> {
    event.preventDefault();

    const roomCode = document.querySelector('#room-code').value.trim();

    if(roomCode){
        const response = await fetch(`/room/${roomCode}`,{
            method: 'GET'
        });
        if (response.ok) {
          const response = await fetch(`/room/${roomCode}`,{
            method: 'POST',
            body: JSON.stringify({roomCode}),
            headers: { 'Content-Type': 'application/json' },
          });
            if(response.ok){
                document.location.replace(`/room/${roomCode}`)
            }
        } else {
            alert('Failed to Find Room.');
        }
    }
}



document.querySelector('#multiplayer').addEventListener('click',multiHandler)

document
.querySelector('.room-form')
.addEventListener('submit', roomHandler);