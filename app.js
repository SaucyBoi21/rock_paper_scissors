let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const userChoice = 0;
const compChoice = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose() {
    compScore++;
    compScore_span.innerHTML = compScore;
}

function draw() {
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win()
            break;
        case "rp":
        case "ps":
        case "sr":
            lose()
            break;
        case "rr":
        case "pp":
        case "ss":
            draw()
            break;
    }
} 

rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})