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
        return "Rock";
    } else if (getRandomInt() == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
