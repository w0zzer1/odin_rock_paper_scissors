let wins = 0;
let loses = 0;

let btn = document.querySelectorAll('button');
let plyerScoreDisplay = document.querySelector(".playerScore");
let computerScoreDisplay = document.querySelector(".computerScore");
let resultDisplay = document.querySelector(".result");
let roundDisplay = document.querySelector(".round");

//Generate random choice of the computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
        switch (random){
            case 1:
                return "rock";
                break;
            case 2:
                return "paper";
                break;
            case 3:
                return "scissors";
        }
}
//Compare the computare and players choice and decice
//who wins
function playRound(computerSelection, playerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "Tie! Both Rock";
        }else if (computerSelection === "paper") {
            return "You Lost! Rock beaten by Paper";
        }else{
            return "You Win! Rock beat scissors";
        }
    }else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return("You Win! Paper beat rock");
        }else if (computerSelection === "paper") {
            return("Tie! Both Paper");
        }else{
            return("You Lost! Paper beaten by scissors");
        }
    }else {
        if (computerSelection === "rock"){
            return("You Lost! Scissors beaten by rock");
        }else if (computerSelection === "paper") {
            return("You Win! Scissors beat paper");
        }else{
            return("Tie! Both Scissors");
        }
    }
}



btn.forEach(function (i) {
    i.addEventListener('click', ()=> {
        // console.log(i.value);
        playerSelection = i.value;
        game();
    });
});

function game(){
    let result = playRound(getComputerChoice(), playerSelection);
    if (result.includes("You Win!")){
        wins = wins + 1;
    } else if (result.includes("You Lost")){
        loses = loses + 1;
    }
    updateDisplay(result);
    checkEnd();
}

function updateDisplay(result){
    computerScoreDisplay.textContent = String(loses);
    plyerScoreDisplay.textContent = String(wins);
    resultDisplay.textContent = String(result);
}

function checkEnd() {
    if (wins === 5){
        result = "Player Won overall";
        wins=0;
        loses = 0;
        updateDisplay(result);
    } else if (loses === 5){
        result = "Computer Won overall";
        wins = 0;
        loses = 0;
        updateDisplay(result);
    }
}
// function game() {
//     let win = 0;
//     let lose = 0;
//     let computerSelection= getComputerChoice();
//     let result = playRound(computerSelection, playerSelection);
//     if (result.includes("You Win!")){
//         wins = wins + 1;
//     } else if (result.includes("You Lost")){
//         lose = lose + 1;
//     }
// }
// function game() {
//     let wins = 0;
//     let loses = 0;
//     for (let i= 0; i<5; i++){
//         let computerSelection = getComputerChoice();
//         let result = playRound(computerSelection, playerSelection);
//         console.log(result);
//         if (result.includes("You Win!")){
//             wins = wins + 1;
//         } else if (result.includes("You Lost")){
//             loses = loses + 1;
//         }
//     }
//     if (wins > loses) {
//         console.log("You won overall"); 
//     } else if(loses > wins){
//         console.log("You lost overall");
//     } else {
//         console.log("Overall result tie");
//     }
// }

// game();