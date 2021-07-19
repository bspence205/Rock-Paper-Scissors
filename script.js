// other cpuChoice

function compPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

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

// other component for single round

function playRound(playerSelection) {
  let compSelection = compPlay();
  let result = "";
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result =
      "You Won! " +
      playerSelection +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (playerScore == 5) {
      result += "<br><br>You won the game! Reload the page to play again";
    }
  } else if (playerSelection == computerSelection) {
    result =
      "It's a draw. You both chose " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  } else {
    computerScore += 1;
    result =
      "You lost! " +
      computerSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (computerScore == 5) {
      result += "<br><br>I won the game! Reload the page and try harder";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  return;
}

// component for single round game
const playerSelection = ["Rock", "Paper", "Scissor"];
const computerSelection = computerPlay();

function pRound(playerChoice, computerSelection) {
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
  if (userScore == 5) {
    console.log("You Won the Game!!");
  } else if (cpuScore == 5) {
    console.log("You Lost the Game!!");
  }
}
