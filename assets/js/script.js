document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('entry').addEventListener('submit', getStarted);
});

function getStarted(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let div = document.getElementById('welcome-message');
    div.innerHTML = `<p>Hello ${name}!You had ${age} years to learn that all your actions have consequences!</p>
    <a href='menu.html'>How to play?</a>
    <a href='game.html'>Start game</a>`;

};

