function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Type Rock, Paper, or Scissors");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer Chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return "computer";
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    console.log("Round 1:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("-------------------------");
    
    console.log("Round 2:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("-------------------------");
    
    console.log("Round 3:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("-------------------------");
    
    console.log("Round 4:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("-------------------------");
    
    console.log("Round 5:");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("-------------------------");
    
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();
