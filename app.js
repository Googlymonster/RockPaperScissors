var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userWord = "user".fontsize(3).sub();
const comptWord = "comp".fontsize(3).sub();

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  number = Math.floor(Math.random() * 3);
  return choices[number];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${userWord} beats ${convertToWord(compChoice)}${comptWord}. You Win!.`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, compChoice) {
  computerScore++;
  compScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    compChoice
  )}${comptWord} beats ${convertToWord(userChoice)}${userWord}. You Lose!.`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, compChoice) {
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${userWord} matches ${convertToWord(compChoice)}${comptWord}. Its a draw!.`;
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("User Wins");
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("Computer Wins");
      lose(userChoice, compChoice);
      break;
    default:
      console.log("Its a draw");
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
