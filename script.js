/* Write a function called getComputerChoice
that will randomly return either:
'Rock', 'Paper', or 'Scissors'
*/
// My plan: 
// 1. Make a random num generator so the computer
// chooses random numbers.
function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max);
}
// 2. Use getRandomInt for random num in
// getComputerChoice
function getComputerChoice() {
    if (getRandomInt() == 1){
        return "rock";
    } else if (getRandomInt() == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
/* Write a function that plays a single 
round of Rock Paper Scissors. The function 
should take two parameters -
the playerSelection and computerSelection -
And then return a string that 
declares the winner like:
"You lose! Paper beats Rock"
*/
function playRound(playerSelection, computerSelection){
    var loweredPlayerSelection = playerSelection.toLowerCase();

    if (loweredPlayerSelection == computerSelection) {
        return "Tie";
    } else if (loweredPlayerSelection == "rock" && computerSelection == "scissors") {
        return `You win! ${loweredPlayerSelection} beats ${computerSelection}`;
    } else if (loweredPlayerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${loweredPlayerSelection} beats ${computerSelection}`;
    } else if (loweredPlayerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${loweredPlayerSelection} beats ${computerSelection}`;
    } else if(computerSelection == "rock" && loweredPlayerSelection == "scissors") {
        return `You lose! ${computerSelection} beats ${loweredPlayerSelection}`;
    } else if (computerSelection == "scissors" && loweredPlayerSelection == "paper") {
        return `You lose! ${computerSelection} beats ${loweredPlayerSelection}`;
    } else if (computerSelection == "paper" && loweredPlayerSelection == "rock") {
        return `You lose! ${computerSelection} beats ${loweredPlayerSelection}`;
    }
}
/* Write a new function called game()
Call the playRound function inside of this one
to lay a 5 round game that keeps score and 
reports a winner or loser at the end. 
*/
function game(playerSelection) {
    var playerScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; i++) {
        var result = playRound(playerSelection, getComputerChoice());
        if (result.slice(0,5) == "You w") {
            playerScore++; 
            updateScore("p_score", playerScore);
            addCode(result);
        } else if (result == "Tie"){
            addCode(result);
        } else {
            computerScore++;
            updateScore("c_score", computerScore);
            addCode(result);
        }
    }
}

function addCode(result) {
    document.getElementById("output").innerHTML += `<p>${result}</p>`;
}

function updateScore(selector, score){
    document.getElementById(selector).innerHTML = score;
}

//var playerChoice = "rock";
//game(playerChoice);

// For player interactivity
var playerScore = 0;
var computerScore = 0;

var buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        var result = playRound(playerSelection, getComputerChoice());
        
        if (result.slice(0,5) == "You w") {
            playerScore++; 
            updateScore("p_score", playerScore);
            addCode(result);
        } else if (result == "Tie"){
            addCode(result);
        } else {
            computerScore++;
            updateScore("c_score", computerScore);
            addCode(result);
        }
    });
});
