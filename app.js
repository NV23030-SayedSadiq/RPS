function getComputerChoice() {
  const randomNumber = Math.random(); 
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Enter your choice: Rock, Paper, or Scissors");
  return userInput.toLowerCase(); 
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

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
    console.log("");
  }

  console.log("--- Game Over ---");
  if (humanScore > computerScore) {
    console.log(`You won the game! Final Score: You ${humanScore} - ${computerScore} Computer`);
  } else if (computerScore > humanScore) {
    console.log(`You lost the game. Final Score: You ${humanScore} - ${computerScore} Computer`);
  } else {
    console.log(`It's a tie! Final Score: You ${humanScore} - ${computerScore} Computer`);
  }
}

console.log("Welcome to Rock Paper Scissors!");
playGame();
