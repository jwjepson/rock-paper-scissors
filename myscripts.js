playerScore = 0;
computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function simulateRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "lose";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "win";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "win";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "lose";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "lose";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "win";
    }
}

function game(e) {
    const result = document.querySelector(".result");
    const playerSelection = e.target.value;
    if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
        const computerSelection = getComputerChoice();
        if (simulateRound(playerSelection, computerSelection) == "win") {
            console.log(`${playerSelection} beats ${computerSelection}`);
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore ++;
        }
        else if (simulateRound(playerSelection, computerSelection) == "lose") {
            console.log(`${computerSelection} beats ${playerSelection}`);
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore ++;
        }
        else {
            console.log("Tie!");
            result.textContent = "Tie!";
        }
        playerScoreCount = document.querySelector(".playerScoreCount");
        computerScoreCount = document.querySelector(".computerScoreCount");
        playerScoreCount.textContent = (`Your Score: ${playerScore}`);
        computerScoreCount.textContent = (`Computer Score: ${computerScore}`);
    }
    else {
        console.log("Invalid input");
        i--;
    }
    if (playerScore == 5) {
        result.style.color = "green";
        result.textContent = "Game over. You win!";
        buttons.forEach(button => button.disabled = true);
        console.log("Game over. You won!");
    }
    else if (computerScore == 5) {
        result.style.color = "red";
        result.textContent = "Game over. You lost!";
        buttons.forEach(button => button.disabled = true);
        console.log("Game over. You lost!");
    }
}

const buttons = document.querySelectorAll("input");
buttons.forEach(button => button.addEventListener("click", game));