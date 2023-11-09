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
        alert('Failed to Update.');
      }
};

document.querySelector('#multiplayer').addEventListener('click',multiHandler)