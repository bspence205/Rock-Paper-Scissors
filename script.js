// component to randomly generate computers choice

function computerPlay() {
  choice = Math.floor(Math.random() * 4);
  if (choice == 1) {
    console.log("Rock");
  } else if (choice == 2) {
    console.log("Paper");
  } else if (choice == 3) {
    console.log("Scizzor");
  }
}
computerPlay();
