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

btns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(getPlayerChoice(button.innerText), getComputerChoice()));
        
    })
})