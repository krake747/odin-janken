// Main
game()

// Functions
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    let isPlayerWinner = false;
    let isDraw = false;
    let p1 = playerSelection.toLowerCase()
    let p2 = computerSelection.toLowerCase()
    switch (true) {
        case (p1 === "rock" && p2 === "scissors"):
            isPlayerWinner = true;
            break;
        case (p1 === "rock" && p2 === "paper"):
            isPlayerWinner = false;
            break;
        case (p1 === "scissors" && p2 === "rock"):
            isPlayerWinner = false;
            break;
        case (p1 === "scissors" && p2 === "paper"):
            isPlayerWinner = true;
            break;
        case (p1 === "paper" && p2 === "rock"):
            isPlayerWinner = true;
            break;
        case (p1 === "paper" && p2 === "scissors"):
            isPlayerWinner = false;
            break;
        default:
            isDraw = true;
            break;
    }

    if (isDraw) {
        return `Draw! Player 1 (${toCapitalize(p1)}) draws Player 2 (${toCapitalize(p2)})`;
    }

    let message = `${isPlayerWinner ? "You win" : "You lose"}! ` +
        `Player 1 (${toCapitalize(p1)}) ${isPlayerWinner ? "beats" : "loses to"} ` +
        `Player 2 (${toCapitalize(p2)})`;

    return message;
}

function game() {
    for (let index = 1; index < 6; index++) {
        const playerSelection = prompt("Please enter your choice: (rock, paper, scissors)").toLocaleLowerCase();
        const computerSelection = computerPlay();
        console.log(`Round ${index}:`, playRound(playerSelection, computerSelection))
    };
}

// Helper Functions
function toCapitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}