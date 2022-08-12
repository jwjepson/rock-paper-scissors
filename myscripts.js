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

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or Scissors? ");
        if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
            const computerSelection = getComputerChoice();
            if (simulateRound(playerSelection, computerSelection) == "win") {
                console.log(`${playerSelection} beats ${computerSelection}`);
                playerScore ++;
            }
            else if (simulateRound(playerSelection, computerSelection) == "lose") {
                console.log(`${computerSelection} beats ${playerSelection}`);
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
    }   
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose");
    }
}

game();