function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
        switch (random){
            case 1:
                console.log("rock");
                break;
            case 2:
                console.log("paper")
                break;
            case 3:
                console.log("scissors")
        }
}

getComputerChoice();