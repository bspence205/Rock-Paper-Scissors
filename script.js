// component to randomly generate computers choice

function computerPlay() {
  let choice = Math.floor(Math.random() * 4);
  if (choice == 1) {
    console.log("Rock");
  } else if (choice == 2) {
    console.log("Paper");
  } else if (choice == 3) {
    console.log("Scissor");
  }
}

// partial component for single round game

const playerSection = "paper";
const computerSelection = computerPlay();
function singleRound(playerSection, computerSelection) {
  if (playerSection == "rock") {
    return "You Lose";
  } else if (playerSection == "scissor") {
    return "You Win";
  }
}

console.log(singleRound(playerSection, computerSelection));
