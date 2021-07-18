// component to randomly generate cpuChoice

function computerPlay() {
  cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice == 0) {
    console.log("Rock");
  } else if (cpuChoice == 1) {
    console.log("Paper");
  } else if (cpuChoice == 2) {
    console.log("Scissor");
  }
  return cpuChoice;
}

// component for single round game

const playerSelection = "Rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (computerSelection == 0) {
    return "Draw, Rock respects Rock";
  } else if (computerSelection == 2) {
    return "Win, Rock dominates Scissor";
  } else if (computerSelection == 1) {
    return "Lost, Paper wrecks Rock";
  }
  return computerSelection;
}

// component for user choice vs cpu choice. 5 rounds to determine winner who is declared in alert box.

const userScore = 0;
const cpuScore = 0;

function game() {
  let userChoice = prompt("Enter your choice: Rock, Paper or Scissor");
  playRound(`${userChoice}, computer`);
  if (userScore == 5) {
    console.log("You Won the Game!!");
  } else if (cpuScore == 5) {
    console.log("You Lost the Game!!");
  }
}
