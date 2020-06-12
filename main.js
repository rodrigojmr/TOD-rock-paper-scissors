function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  document.getElementById("player-hand").src = './images/' + playerSelection + ".svg";
  if (playerSelection === computerSelection) {
    gameResult.textContent = "It's a tie!";
  } else {
    if (
    playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
      player1Score = player1Score + 1;
      gameCount = gameCount + 1;
      gameScore.textContent = player1Score + ' - ' +  computerScore;
      gameResult.textContent = "You Win!";
      }
    else { 
      computerScore = computerScore + 1;
      gameCount = gameCount + 1;
      gameScore.textContent = player1Score + ' - ' +  computerScore;
      gameResult.textContent = "The Computer Wins!";
    }
  }
}

function pause() {
  document.querySelectorAll('.btn').forEach(element => {
    element.removeEventListener('click', game, false);
  });

  setTimeout(() => {
    reset();
    document.querySelectorAll('.btn').forEach(element => {
      element.addEventListener('click', game, false);
    });
  }, 2000);
}

function computerPlay() {
  rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    document.getElementById('computer-hand').src = './images/Rock.svg';
    return "Rock"
  } else if (rand === 1) {
    document.getElementById('computer-hand').src = './images/Paper.svg';
    return "Paper"
  }
  else if (rand === 2) {
    document.getElementById('computer-hand').src = './images/Scissors.svg';
    return "Scissors"
  }
}

function game() {
  let playerSelection = this.innerText[0].toUpperCase() + this.innerHTML.slice(1).toLowerCase();
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  if (gameCount > 4) {
    if (player1Score > computerScore) {
      heading.textContent = "You won! You scored " + player1Score + " and the Computer scored " + computerScore + ".";
      pause();
      } else if (computerScore > player1Score) {
      heading.textContent = "You lost! You scored " + player1Score + " and the Computer scored " + computerScore + ".";
      pause();
      };
      gameCount = 0;
      player1Score = 0;
      computerScore = 0;
  }
}

function playerChoiceFunct() {
  let choice = this.innerText;
  console.log(choice);
}

function reset() {
  document.getElementById('computer-hand').src = '';
  document.getElementById("player-hand").src = '';
  heading.textContent = "Play a 5 round game with the computer";
  gameScore.innerHTML = "&nbsp;";
  gameResult.innerHTML = "&nbsp";
  gameCount = 0;
  player1Score = 0;
  computerScore = 0;
}

document.querySelectorAll('.btn').forEach(element => {
  element.addEventListener('click', game, false);
});

document.getElementById('reset').addEventListener('click', reset, false);

let heading = document.querySelector(".heading");
let gameScore = document.querySelector(".game-score");
let gameResult = document.querySelector(".game-result");

let gameCount = 0;
let player1Score = 0;
let computerScore = 0;

// game();