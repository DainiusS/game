// Picks random number from 1 (inclusive) to 3 (inclusive) 
function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

// Assigns selection to random number
function computerPlay(){
    const selectedNumber = getRandomNumber();
    if (selectedNumber == 1){
        return "ROCK";
    } else if (selectedNumber == 2) {
        return "PAPER";
    } else if (selectedNumber == 3) {
        return "SCISSORS";
    }
}

// Gets user's input, checks if it is proper and converts it to uppercase
function usersPlay(){
    input = prompt("choose between: ROCK PAPER SCISSORS").toUpperCase();
    if (input == "ROCK" || input == "PAPER" || input == "SCISSORS") {
        return input;
    } else {
       alert("You entered ivalid selection! Try again");
       return usersPlay();
    }
    
}

// Plays a round
function playRound(playerSelection, computerSelection){
    playerSelection = usersPlay();
    computerSelection = computerPlay();
    console.log (`Your selection: ${playerSelection}`);
    console.log (`Computers selection: ${computerSelection}`);
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You win! ROCK beats SCISSORS!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return "You lose! ROCK beats SCISSORS!";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return "You lose! SCISSORS beats PAPER!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You win! SCISSORS beats PAPER!";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "You win! PAPER beats ROCK!";
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        return "You lose! PAPER beats ROCK!";
    } else if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
}
console.log(playRound());