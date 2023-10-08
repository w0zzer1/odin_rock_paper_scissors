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

function game() {
    let wins = 0;
    let loses = 0;
    for (let i= 0; i<5; i++){
        let playerSelection = prompt("Choose one:");
        let computerSelection = getComputerChoice();
        let result = playRound(computerSelection, playerSelection);
        console.log(result);
        if (result.includes("You Win!")){
            wins = wins + 1;
        } else if (result.includes("You Lost")){
            loses = loses + 1;
        }
    }
    if (wins > loses) {
        console.log("You won overall"); 
    } else if(loses > wins){
        console.log("You lost overall");
    } else {
        console.log("Overall result tie");
    }
}

game();