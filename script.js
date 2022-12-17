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
