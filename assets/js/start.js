let form = document.getElementById('entry');

// Get user name and age and submit details to start the game

function getStarted(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    // First character will be capitalized
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    let age = document.getElementById('age').value;
    let div = document.getElementById('player-details');
    // Insert the welcome message with the name/age values and link to instructions/start game
    div.innerHTML = `<div id='player-details'><p>Hello ${capitalizedName}! You had ${age} years to learn that all your actions have consequences!</p>
      
      <a href='instructions.html' class='nav-btn hover-effects'>How to play?</a>
      <a href='game.html' class='nav-btn hover-effects' id='start-game'>Start Game</a></div>`;
  }

form.addEventListener('submit', getStarted);
