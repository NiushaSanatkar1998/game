const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const cbtn = document.querySelectorAll(".cbtn");

let player;
let computer;
let result;

cbtn.forEach((butten) =>
  butten.addEventListener("click", () => {
    player = butten.textContent;
    computerTurn();
    playerText.textContent = ` player: ${player}`;
    computerText.textContent = `computer : ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw";
  } else if (computer == "Rock") {
    return player == "paper" ? "You Win!" : "You Lose!";
  } else if (computer == "Paper") {
    return player == "Scissors" ? "You Win!" : "You Lose!";
  } else if (computer == "Scissors") {
    return player == "Rock" ? "You Win!" : "You Lose!";
  }
}
