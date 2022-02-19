// // Let's play a few rounds
// function game(timesToPlay){
//     let userWins = 0;
//     let computerWins = 0;
//     for (let i = 0; i < timesToPlay; i++){
//         let x = playRound(usersPlay(prompt("choose among: ROCK PAPER SCISSORS").toUpperCase()), computerPlay(getRandomNumber()));
//         if (x == 1){
//             userWins++;
//         } else if (x == 2){
//             computerWins++;
//         } else if (x == 3){
//             userWins = userWins;
//             computerWins = computerWins;
//         }
//     }
//     if(userWins > computerWins){
//         console.log(`User wins! ${userWins} to ${computerWins}!`);
//     } else if (userWins < computerWins) {
//         console.log(`Computer wins ${computerWins} to ${userWins}!`)
//     } else {
//         console.log(`It's a tie ${computerWins} to ${userWins}!`)
//     }

//}

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


refreshButton.addEventListener("click", () => location.reload());


// Assigns selection to random number

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

function checkIfOver(h, com){
    if (h == 5){
        main.style.display = "none";
        ultimateWinner.style.display = "flex";
        winnerImage.src = "./images/you.jpg";
        winnerAnnounced.textContent = "YOU WON";
    } else if (com == 5) {
        main.style.display = "none";
        ultimateWinner.style.display = "flex";
        winnerImage.src = "./images/computer.jpg";
        winnerAnnounced.textContent = "COMPUTER WON";
    }
    
}



btn.forEach(function(button) {
    button.addEventListener("click", () =>{
        let a = getComputersNumber();
        let b = getHumansChoice(button);
        let c = checkWhoWonRound(b, a);
        countScore(c);
        checkIfOver(humanVictories, computerVictories);
    });
});