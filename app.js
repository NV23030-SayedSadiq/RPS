function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber < 0.67) {
        return "Paper";
    } else {
        return "Scisscor";
    }
}

function getHumanChoice() {
    const choice = prompt("Type Rock, Paper, or Scisscor");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer Chose: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice == "Rock" && computerChoice ===)
    )
}