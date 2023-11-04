document.addEventListener('DOMContentLoaded', function() {

    const btnLinks = document.getElementsByClassName('btnLink');
    const privateMessage = document.getElementById('private-message');
  
    let messageDivIsClicked = false; // Variable to keep track of the click state for privateMessage
    const btnLinksIsClicked = new Array(btnLinks.length).fill(false); // Array to keep track of the click state for btnLinks
  
    function buttonLink(event, index) {
      event.preventDefault();
      // Toggle the color for the specific element that triggered the event
      if (btnLinksIsClicked[index]) {
        event.target.style.color = ""; // Remove the color
      } else {
        event.target.style.color = "#0A327B";
      }
      btnLinksIsClicked[index] = !btnLinksIsClicked[index]; // Toggle the state
    }
  
    // Loop through the collection and add the event listener to each element
    for (let i = 0; i < btnLinks.length; i++) {
      btnLinks[i].addEventListener('click', function(event) {
        buttonLink(event, i);
      });
    }
  
    function messageDiv(event) {
      event.preventDefault();
      // Toggle between two states for privateMessage by checking the variable
      if (messageDivIsClicked) {
        privateMessage.style.backgroundColor = ''; // Remove the background color
        privateMessage.style.border = ''; // Remove the border
      } else {
        privateMessage.style.backgroundColor = '#E5EFFA';
        privateMessage.style.border = '1px solid #DDE7EE';
      }
      messageDivIsClicked = !messageDivIsClicked; // Toggle the state
    }
  
    privateMessage.addEventListener('click', messageDiv);
  
  });
  
