// Main
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const roundResult = playRound(button.id, computerSelection);

        incrementScore(roundResult);
        checkWinner();
        // Create log of rounds played
        const results = document.querySelector("#results");
        const content = document.createElement("p");
        content.textContent = showResultMessage(roundResult, button.id, computerSelection);
        results.appendChild(content);
    });
});


// Functions
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    let isPlayerWinner = false;
    let isDraw = false;
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();
    switch (true) {
        case p1 === "rock" && p2 === "scissors":
            isPlayerWinner = true;
            break;
        case p1 === "rock" && p2 === "paper":
            isPlayerWinner = false;
            break;
        case p1 === "scissors" && p2 === "rock":
            isPlayerWinner = false;
            break;
        case p1 === "scissors" && p2 === "paper":
            isPlayerWinner = true;
            break;
        case p1 === "paper" && p2 === "rock":
            isPlayerWinner = true;
            break;
        case p1 === "paper" && p2 === "scissors":
            isPlayerWinner = false;
            break;
        default:
            isDraw = true;
            break;
    }
    return isDraw ? 0 : isPlayerWinner ? 1 : -1;
}

function incrementScore(roundResult) {
    let scoresTag;
    if (roundResult === 0) { return; };

    if (roundResult === 1) {
        scoresTag = document.getElementById("player1");
    };

    if (roundResult === -1) {
        scoresTag = document.getElementById("player2");
    };

    let score = parseInt(scoresTag.textContent)
    scoresTag.textContent = ++score;
};

function checkWinner() {
    const finalScore = document.querySelector("#score");
    const h2 = document.createElement("h2");

    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");

    if (player1.textContent == "5" || player1.textContent == 5) {
        player1.style.color = "green";
        player2.style.color = "red";
        h3.textContent = "Player 1 wins!";
        finalScore.appendChild(h2);
    };
    if (player2.textContent == "5" || player2.textContent == 5) {
        player1.style.color = "red";
        player2.style.color = "green";
        h2.textContent = "Player 2 wins!";
        finalScore.appendChild(h2);
    };
};

function showResultMessage(result, choice1, choice2) {
    let numericResult = parseInt(result);
    if (numericResult === 0) {
        return `Draw! Player 1 (${toCapitalize(choice1)}) draws Player 2 (${toCapitalize(choice2)})`;
    }

    let message =
        `${numericResult === 1 ? "You win" : "You lose"}! ` +
        `Player 1 (${toCapitalize(choice1)}) ${numericResult === 1 ? "beats" : "loses to"} ` +
        `Player 2 (${toCapitalize(choice2)})`;

    return message;
}

// Helper Functions
function toCapitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
