import gamePlay from './data.js';

let audioSource = document.getElementById('audioSource');

let video = document.getElementById('video');

// User choices
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

// Paragraph which will show the consequences of the choice

const consequence = document.getElementById('game-text');

// Remove button if it is empty
function hideButton() {
  let buttons = document.getElementsByClassName('choice-btn');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent.trim() != "") {
      buttons[i].style.display = 'unset';
    } else {
      buttons[i].style.display = 'none';
    };
  };
}

// Remove the Happy Birtday header
function removeHeading() {
  let heading = document.getElementById('heading');
  if (heading) {
    heading.remove();
  }
};

// Loop function to get back to the first choices at some scenarios

function loopGame() {
  let loop = document.getElementById('loop');
  loop.innerHTML = `<a href='game.html' id=loop-link>Come on, it’s your birthday. You need to wish for something...</a> `;
};

// Changing audio & video based on the decision
function loopPath(choice) {
  if (choice === '312' || choice === '2211') {
    loopGame();
    game();
  }
};

// Store the previous choice 
let choice = '';
//Get the value of the first choice
function firstChoice(event) {
  // Use the choice number by removing the choice word and append its number only
  choice += event.target.id.replace('choice', '');
  nextChoice();
  removeHeading();
  hideButton();
  loopPath(choice);
};
// Function for moving to the next scenario based on the previous choice
function nextChoice() {
  let scenario = gamePlay[choice];
  consequence.textContent = scenario.text;
  choice1.textContent = scenario.choices['1'];
  choice2.textContent = scenario.choices['2'];
  choice3.textContent = scenario.choices['3'];
  choice4.textContent = scenario.choices['4'];
  changeVideo(scenario.video);
  changeAudio(scenario.audio);
  hideButton();
};

function eventListeners() {
  choice1.addEventListener('click', firstChoice);
  choice2.addEventListener('click', firstChoice);
  choice3.addEventListener('click', firstChoice);
  choice4.addEventListener('click', firstChoice);
};

// Change audio at specific scenarios

function changeAudio(newAudio) {
  audioSource.src = 'assets/media/audio/' + newAudio;
  sound.load();
}

// Add video at specific scenarios

function changeVideo(newVideo) {
  video.src = 'assets/media/video/' + newVideo;
  video.style.display = 'unset';
  video.load();

}

// Gameplay function which initiates the game

function game() {
  let path = location.pathname;
  if (path === '/game.html') {
    eventListeners();
  };
  hideButton();
};

game();