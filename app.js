function getComputerChoice() {
  const rand = Math.random();
  if (rand < 1 / 3) return "rock";
  else if (rand < 2 / 3) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  const player = humanChoice.toLowerCase();
  const computer = computerChoice;

  console.log(`You chose: ${player}`);
  console.log(`Computer chose: ${computer}`);

  if (player === computer) {
    console.log("It's a draw!");
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${player} beats ${computer}`);
    return "human";
  } else {
    console.log(`You lose! ${computer} beats ${player}`);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  console.log("Welcome to Rock Paper Scissors.");
  console.log("Set your choice each round by typing: yourChoice = 'rock'");

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);

    if (typeof yourChoice === "undefined") {
      console.log("Please set 'yourChoice' before starting the game.");
      return;
    }

    const human = yourChoice;
    const computer = getComputerChoice();
    const result = playRound(human, computer);

    if (result === "human") humanScore++;
    else if (result === "computer") computerScore++;

    console.log(`Score => You: ${humanScore} | Computer: ${computerScore}\n`);
  }

  console.log("--- Final Results ---");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game. Final: ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie. Final: ${humanScore} - ${computerScore}`);
  }
}
