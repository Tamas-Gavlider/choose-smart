// Get user name and age and submit details to start the game

function getStarted() {
    let name = document.getElementById('name').value;
    // First character will be capitalized
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    let age = document.getElementById('age').value;
    let div = document.getElementById('player-details');
    div.innerHTML = `<div id='player-details'><p>Hello ${capitalizedName}! You had ${age} years to learn that all your actions have consequences!</p>
      
      <a href='instructions.html' class='nav-btn hover-effects'>How to play?</a>
      <a href='game.html' class='nav-btn hover-effects' id='start-game'>Start game</a></div>`;
    // Keep the feedback arrows at the same position after user submit name and age
    let feedback = document.getElementById('feedback');
    feedback.style.marginTop = '105px';
  
  }

  let form = document.getElementById('entry');
if (form) {
  form.addEventListener('submit', getStarted);
}