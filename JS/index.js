document.addEventListener('DOMContentLoaded', function() {

const btnLinks = document.getElementsByClassName('btnLink');
const privateMessage =document.getElementById('private-message')


function buttonLink(event) {
    event.preventDefault();

    // Modify the specific element that triggered the event
    event.target.style.color = "#0A327B";

}

// Loop through the collection and add the event listener to each element
for (let i = 0; i < btnLinks.length; i++) {
    btnLinks[i].addEventListener('click', buttonLink);
}

function messageDiv (event){
    event.preventDefault();

     // Modify the entire div, not just the paragraph
     privateMessage.style.backgroundColor = '#E5EFFA';
     privateMessage.style.border = '1px solid #DDE7EE';
 }

privateMessage.addEventListener('click', messageDiv);

});