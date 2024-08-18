// Get user name and age and submit details to start the game
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('entry').addEventListener('submit', getStarted);
});

function getStarted(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let div = document.getElementById('welcome-message');
    div.innerHTML = `<p>Hello ${name}!You had ${age} years to learn that all your actions have consequences!</p>
    <p>Are you ready to play?</p>
    <a href='instructions.html'>How to play?</a>
    <a href='game.html'>Start game</a>`;

};

// User choices
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

