playerScore = 0;
computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function simulateRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "lose";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "lose";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "lose";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win";
    }
}

function game(e) {
    const score = document.querySelector(".score");
    const playerSelection = e.target.textContent;
    if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
        const computerSelection = getComputerChoice();
        if (simulateRound(playerSelection, computerSelection) == "win") {
            console.log(`${playerSelection} beats ${computerSelection}`);
            score.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore ++;
        }
        else if (simulateRound(playerSelection, computerSelection) == "lose") {
            console.log(`${computerSelection} beats ${playerSelection}`);
            score.textContent = `${computerSelection} beats ${playerSelection}`;
            computerScore ++;
        }
        else {
            console.log("Tie!");
        }
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computers Score: ${computerScore}`);
    }
    else {
        console.log("Invalid input");
        i--;
    }
    if (playerScore == 5) {
        console.log("You win");
    }
    else if (computerScore == 5) {
        console.log("You lose");
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game));