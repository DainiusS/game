const btn = document.querySelectorAll(".actionBtn");
const img = document.querySelector("#humans");
const img2 = document.querySelector("#computers");
const roundWinner = document.querySelector("#round-winner");
const compVic = document.querySelector("#computers-victories");
const humVic = document.querySelector("#humans-victories");
const ultimateWinner = document.querySelector("#winner");
const refreshButton = document.querySelector("#refresh");
const winnerImage = document.querySelector("#ultimateWinner");
const main = document.querySelector("#main");
const winnerAnnounced = document.querySelector("#winner-announced");

// Starts new game
refreshButton.addEventListener("click", () => location.reload());

// Assigns image to computers choice
function getComputersNumber() {
    let computersNumber = Math.floor(Math.random() * 3) + 1;
    img2.src=`./images/${computersNumber}.jpg`;
    return computersNumber;
}

// Represents humans choice in a picture
function getHumansChoice(item){
    if (item.id == "rock"){
        img.src="./images/1.jpg";
        return 1;
    } else if (item.id == "paper") {
        img.src="./images/2.jpg";
        return 2;
    } else if (item.id == "scissors") {
        img.src="./images/3.jpg";
        return 3;
    }
}

// Checks who won a round
function checkWhoWonRound (playerSelection, computerSelection){
        // outcomes 1 - user wins, 2 - computer wins, 3 - it's a tie    
        let outcome;
        if (playerSelection == 1 && computerSelection == 3){
            outcome = 1;
            roundWinner.textContent = "You win!";
            return outcome;
        } else if (playerSelection == 3 && computerSelection == 1){
            outcome = 2;
            roundWinner.textContent = "Computer wins!";
            return outcome;
        } else if (playerSelection == 2 && computerSelection == 3){
            outcome = 2;
            roundWinner.textContent = "Computer wins!";
            return outcome;
        } else if (playerSelection == 3 && computerSelection == 2){
            outcome = 1;
            roundWinner.textContent = "You win!";
            return outcome;
        } else if (playerSelection == 2 && computerSelection == 1){
            outcome = 1;
            roundWinner.textContent = "You win!";
            return outcome;
        } else if (playerSelection == 1 && computerSelection == 2){
            outcome = 2;
            roundWinner.textContent = "Computer wins!";
            return outcome;
        } else if (playerSelection == computerSelection) {
            roundWinner.textContent = "It's a tie!";
            outcome = 3;
            return outcome;
        }
}

// Counts score
let humanVictories = 0;
let computerVictories = 0;

function countScore(num){
    if (num == 1){
        humanVictories++;
    } else if (num == 2 ){
        computerVictories++;
    } else {
        computerVictories = computerVictories;
        humanVictories = humanVictories;
    }
    humVic.textContent = `${humanVictories}`;
    compVic.textContent = `${computerVictories}`;
}

// Tracks the score and ends game when one of the palyers reaches 5 points
function checkIfOver(humansScore, comScore){
    if (humansScore == 5){
        main.style.display = "none";
        ultimateWinner.style.display = "flex";
        winnerImage.src = "./images/you.jpg";
        winnerAnnounced.textContent = "YOU WON!";
    } else if (comScore == 5) {
        main.style.display = "none";
        ultimateWinner.style.display = "flex";
        winnerImage.src = "./images/computer.jpg";
        winnerAnnounced.textContent = "COMPUTER WON!";
    }
    
}

// Initiates everything
btn.forEach(function(button) {
    button.addEventListener("click", () =>{
        let a = getComputersNumber();
        let b = getHumansChoice(button);
        let c = checkWhoWonRound(b, a);
        countScore(c);
        checkIfOver(humanVictories, computerVictories);
    });
});