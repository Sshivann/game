function playRound(playerSelection, computerSelection) {
  if (!isValidChoice(playerSelection)) {
    return "Invaild choice. Please enter rock, paper, or scissors";
  }
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "you win!";
  } else {
    return "Computer wins!";
  }
}
function isValidChoice(choice) {
    return choice === 'rock' || choice === 'paper' || choice === 'scissors'
}
function  getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math,floor(Math,random()*3);
    return choices[randomNumber];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
