
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

if(choice4.value === ''){
    choice4.style.display = 'none';
}


/*
// Attach event listeners to each button
for(button of buttons){
    button.addEventListener('click', handleButtonClick);
};

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