
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

const decisions = {
    'a' : {
        'aa' : "What to do?",
        'ab' : "Text",
        "ac" : "Text2",
        "ad" : 'Another text'
    },
    'b' : {
        'ba' : "Text b",
        'bb' : 'Text bb',
        'bc' : 'text bc'
    },

    'c' : {
        'ca' : "Text c",
        'cb' : 'Text cb',
        'cc' : 'Text cc'

    }
}


const firstChoices = ['Stay home','Go shopping','Cook something']

function firstOption(){
    choice1.textContent = firstChoices[0];
    choice2.textContent = firstChoices[1];
    choice3.textContent = firstChoices[2];
    choice4.style.display = 'none';

}



let selectedChoice = '';
let buttons = document.getElementsByClassName('choice-btn');

// Function to handle button clicks
function handleButtonClick(event) {
    // Store the clicked button's ID
    selectedChoice = event.target.id;
    
    // Check which button was clicked using an if statement
    if (selectedChoice === "choice1") {
        // Function to handle button clicks
function handleButtonClick(event) {
    // Store the clicked button's ID
    selectedChoice = event.target.id;
    
    // Check which button was clicked using an if statement
    if (selectedChoice === "choice1") {
        document.getElementById('result').innerHTML = "You chose the first choice!";
    } else if (selectedChoice === "choice2") {
        document.getElementById('result').innerHTML = "You chose the second choice!";
    } else if (selectedChoice === "choice3") {
        document.getElementById('result').innerHTML = "You chose the third choice!";
    } else if (selectedChoice === "choice4") {
        document.getElementById('result').innerHTML = "You chose the fourth choice!";
    }
}

// Attach event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
    } else if (selectedChoice === "choice2") {
        document.getElementById('result').innerHTML = "You chose the second choice!";
    } else if (selectedChoice === "choice3") {
        document.getElementById('result').innerHTML = "You chose the third choice!";
    } else if (selectedChoice === "choice4") {
        document.getElementById('result').innerHTML = "You chose the fourth choice!";
    }
}

// Attach event listeners to each button
for(button of buttons){
    button.addEventListener('click', handleButtonClick);
};

/*
for (const [key, value] of Object.entries(questions)) {
  console.log(key, value);
}

  // Store the questions and corresponding choices
const questions = [
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green", "Yellow"]
    },
    {
        question: "What is your favorite animal?",
        choices: ["Cat", "Dog", "Elephant", "Tiger"]
    },
    {
        question: "What is your favorite season?",
        choices: ["Spring", "Summer", "Autumn", "Winter"]
    },
    {
        question: "What is your favorite fruit?",
        choices: ["Apple", "Banana", "Cherry", "Date"]
    }
];

// Variable to track the current question
let currentQuestionIndex = 0;

// Function to display the current question and its choices
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Update the question text
    document.getElementById('game-text').textContent = currentQuestion.question;

    // Update the button text
    const buttons = document.querySelectorAll('button.choice-btn');
    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.style.display = 'inline-block';
        button.onclick = handleChoice;
    });
}

// Function to handle the button click and move to the next question
function handleChoice(event) {
    // Save the clicked button's choice
    const selectedChoice = event.target.textContent;

    // Optional: Show which choice was made (for debugging or feedback)
    document.getElementById('result').textContent = `You chose: ${selectedChoice}`;

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        // Display the next question
        displayQuestion();
    } else {
        // No more questions, end the game
        document.getElementById('game-text').textContent = "Thank you for playing!";
        document.getElementById('result').textContent = "The game has ended.";
        
        // Optionally, hide buttons or offer a restart option
        const buttons = document.querySelectorAll('button.choice-btn');
        buttons.forEach(button => button.style.display = 'none');
        
        // Optionally, show a restart button
        const restartButton = document.createElement('button');
        restartButton.textContent = "Restart";
        restartButton.onclick = restartGame;
        document.body.appendChild(restartButton);
    }
}

// Function to restart the game
function restartGame() {
    currentQuestionIndex = 0;
    document.getElementById('result').textContent = "";
    displayQuestion();
    // Remove the restart button
    document.querySelector('button').remove();
}

// Initialize the game by displaying the first question
displayQuestion(); */