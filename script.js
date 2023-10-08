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

function playRound(computerSelection, playerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "Tie! Both Rock";
        }else if (computerSelection === "paper") {
            return "You Lose! Rock beaten by Paper";
        }else{
            return "You Win! Rock beat scissors";
        }
    }else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return("You Win! Paper beat rock");
        }else if (computerSelection === "paper") {
            return("Tie! Both Paper");
        }else{
            return("You Lose! Paper beaten by scissors");
        }
    }else {
        if (computerSelection === "rock"){
            return("You Lose! Scissors beaten by rock");
        }else if (computerSelection === "paper") {
            return("You Win! Scissors beat paper");
        }else{
            return("Tie! Both Scissors");
        }
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));