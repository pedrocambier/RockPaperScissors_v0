const RPS = ['rock', 'paper', 'scissors'];

function roundRPS(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) return 0;
  if (playerSelection === 'rock') return (computerSelection === 'scissors') ? 1 : -1;
  if (playerSelection === 'paper') return (computerSelection === 'rock') ? 1 : -1;
  if (playerSelection === 'scissors') return (computerSelection === 'paper') ? 1 : -1;
  return -1;
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  const maxRounds = 5;
  for (let i=0; i<maxRounds; i++){
    const computerSelection = RPS[Math.floor(Math.random()*3)];
    let playerSelection = (window.prompt('Enter your choice: ')).toLowerCase(); 
    while (!RPS.includes(playerSelection)) {
      playerSelection = (window.prompt('Invalid choice! Enter your choice: ')).toLowerCase(); 
    }
    console.log(`Player choose ${playerSelection} and computer choose ${computerSelection}.`);
    const resultRound = roundRPS(playerSelection, computerSelection);
    console.log(`${(resultRound == 1) ? "You Win!" : (resultRound == 0) ? "It's a tie!" : "You lose!"} ${playerSelection} ${(resultRound == 1) ? "beats" : (resultRound == 0) ? "is equal to" : "loses to"} ${computerSelection}!`);
    scoreComputer += (resultRound === -1);
    scorePlayer += (resultRound === 1);
    console.log(`This is round ${i+1}, score is Player: ${scorePlayer} Computer ${scoreComputer}.`);
  }

  console.log('Game has Finished!');
  console.log(`Final score is Player: ${scorePlayer} Computer ${scoreComputer}.`);
  console.log(`${(scorePlayer===scoreComputer) ? "It's a draw!!" : (scorePlayer > scoreComputer) ? "Congratulations, you win!" : "Too bad, you lose!"}`);
}