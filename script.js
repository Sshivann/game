
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function getHumanChoice() {
  let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
      choice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      humanScore++;
      console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
  } else {
      computerScore++;
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
  }
}

function game() {
  const totalRounds = 5; 

  for (let i = 0; i < totalRounds; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
      console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
  } else if (computerScore > humanScore) {
      console.log(`Sorry, you lost the game. The final score was Computer: ${computerScore}, Human: ${humanScore}.`);
  } else {
      console.log(`The game is a tie with both scoring ${humanScore}.`);
  }
}

game();
