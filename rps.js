const hand = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*hand.length);
    console.log(hand[choice]);
    return hand[choice];
}

function getPlayerChoice(choice) {
    if (choice.toLowerCase() === hand[0]) {
        return hand[0];
    } else if (choice.toLowerCase() === hand[1]) {
        return hand[1];
    } else if (choice.toLowerCase() === hand[2]) {
        return hand[2];
    } else {
        return "I do not understand..."
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === hand[0] && computerSelection === hand[2] || 
        playerSelection === hand[1] && computerSelection === hand[0] || 
        playerSelection === hand[2] && computerSelection === hand[1]) {
        
        playerScore += 1;
        return "player wins";

    } else if (playerSelection === hand[0] && computerSelection === hand[1] || 
        playerSelection === hand[1] && computerSelection === hand[2] || 
        playerSelection === hand[2] && computerSelection === hand[0]) {
        
        computerScore +=1;
        return "computer wins";

    } else if (playerSelection === computerSelection) {
        return "tie";

    } else {
        return "Invalid";
    }
}

function game() {
    while (playerScore <= 5 && computerScore <=5) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

const btns = document.querySelectorAll('button');

const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');

const playerScoreTotal = document.querySelector('.playerScoreTotal');
const computerScoreTotal = document.querySelector('.computerScoreTotal');

const results = document.querySelector('.results');

btns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = getPlayerChoice(button.textContent);
        let computerSelection = getComputerChoice();

        playerChoice.textContent = String(playerSelection);
        computerChoice.textContent = String(computerSelection);

        console.log(playRound(playerSelection, computerSelection));

        playerScoreTotal.textContent = String(playerScore);
        computerScoreTotal.textContent = String(computerScore);

        if (playerScore == 5) {
            results.textContent = "Player Wins";

        } else if (computerScore == 5) {
            results.textContent = "Computer Wins";

        }

    })
})



