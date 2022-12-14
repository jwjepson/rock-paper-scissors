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
    const computerSelection = getComputerChoice();
    
    if (simulateRound(playerSelection, computerSelection) == "win") {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore ++;
    }
    else if (simulateRound(playerSelection, computerSelection) == "lose") {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore ++;
    }
    else {
        result.textContent = "Tie!";
    }
    playerScoreCount = document.querySelector(".playerScoreCount");
    computerScoreCount = document.querySelector(".computerScoreCount");
    
    playerScoreCount.textContent = (`Your Score: ${playerScore}`);
    computerScoreCount.textContent = (`Computer Score: ${computerScore}`);
    
    if (playerScore == 5) {
        result.style.color = "green";
        result.textContent = "Game over. You win!";
        buttons.forEach(button => button.disabled = true);
    }
    else if (computerScore == 5) {
        result.style.color = "red";
        result.textContent = "Game over. You lost!";
        buttons.forEach(button => button.disabled = true);
    }
}

const buttons = document.querySelectorAll("input");
buttons.forEach(button => button.addEventListener("click", game));