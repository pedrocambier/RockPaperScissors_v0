const RPS = ['rock', 'paper', 'scissors'];

function roundRPS(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;
  if (playerSelection === 'rock') return (computerSelection === 'scissors') ? 1 : -1;
  if (playerSelection === 'paper') return (computerSelection === 'rock') ? 1 : -1;
  if (playerSelection === 'scissors') return (computerSelection === 'paper') ? 1 : -1;
  return -1;
}

let scorePlayer = 0;
let scoreComputer = 0;
let numRounds = 0;
const maxRounds = 5;
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
div.style.whiteSpace = "pre";
Array.from(buttons).forEach(button => {
  button.addEventListener('click', event => {
    const computerSelection = RPS[Math.floor(Math.random() * 3)];
    let playerSelection = event.target.textContent;
    const resultRound = roundRPS(playerSelection, computerSelection);
    div.textContent = `${(resultRound == 1) ? "You Win!" : (resultRound == 0) ? "It's a tie!" : "You lose!"} ${playerSelection} ${(resultRound == 1) ? "beats" : (resultRound == 0) ? "is equal to" : "loses to"} ${computerSelection}!`;
    scoreComputer += (resultRound === -1);
    scorePlayer += (resultRound === 1);
    div.textContent += "\r\n" + `This is round ${++numRounds}, score is Player: ${scorePlayer} Computer ${scoreComputer}.`;
    if (numRounds === 5) {
      div.textContent += "\r\nGame has Finished!";
      div.textContent += "\r\n" + `Final score is Player: ${scorePlayer} Computer ${scoreComputer}.`;
      div.textContent += "\r\n" + `${(scorePlayer === scoreComputer) ? "It's a draw!!" : (scorePlayer > scoreComputer) ? "Congratulations, you win!" : "Too bad, you lose!"}`;
      scorePlayer = 0;
      scoreComputer = 0;
      numRounds = 0;
    }
  });
});