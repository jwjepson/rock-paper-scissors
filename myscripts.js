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