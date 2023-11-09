const buttons = document.querySelectorAll("button");
  
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        
        const data = event.target.getAttribute('data-genre');
  
        console.log(data);

        
        // window.location.href = '/question'
    });
});