function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function getComputerChoice(playerChoice) {
  const computerChoice = choices[getRandomInt(3)]; //this is a custom version that generates values from 0 to 3
  let result = "";

  if (playerChoice === computerChoice) {
    result = "TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" ? "The Player won!" : "The Player lost";
        break;
      case "paper":
        result =
          computerChoice === "rock" ? "The Player won!" : "The Player lost";
        break;
      case "scissors":
        result =
          computerChoice === "paper" ? "The Player won!" : "The Player lost";
        break;
      default:
        console.log("ERROR");
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
}
