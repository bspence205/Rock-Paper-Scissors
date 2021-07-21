let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");

// random cpuChoice

function compPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

// other component for single round

function playRound(playerSelection) {
  let compSelection = compPlay();
  let result = "";
  if (
    (playerSelection == "rock" && compSelection == "scissors") ||
    (playerSelection == "scissors" && compSelection == "paper") ||
    (playerSelection == "paper" && compSelection == "rock")
  ) {
    playerScore += 1;
    result =
      "You Won! " +
      playerSelection +
      " beats " +
      compSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      compScore;

    if (playerScore == 5) {
      result += "<br><br>You won the game! Reload the page to play again";
    }
  } else if (playerSelection == compSelection) {
    result =
      "It's a draw. You both choose " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  } else {
    computerScore += 1;
    result =
      "You lost! " +
      compSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (computerScore == 5) {
      result +=
        "<br><br>I won the game! Be Better! Reload the page and try harder";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
