// Picks random number from 1 (inclusive) to 3 (inclusive) 
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// Assigns selection to random number
function computerPlay(selectedNumber){
    if (selectedNumber == 1){
        return "ROCK";
    } else if (selectedNumber == 2) {
        return "PAPER";
    } else if (selectedNumber == 3) {
        return "SCISSORS";
    }
}

// Gets user's input, checks if it is proper and converts it to uppercase
function usersPlay(input){
    if (input == "ROCK" || input == "PAPER" || input == "SCISSORS") {
        return input;
    } else {
       alert("You entered invalid selection! Try again :)");
       return usersPlay();
    }
    
}

// Plays a round
function playRound(playerSelection, computerSelection){
    console.log (`Your selection: ${playerSelection}`);
    console.log (`Computer's selection: ${computerSelection}`);
// outcomes 1 - user wins, 2 - computer wins, 3 - it's a tie    
    let outcome = 0;
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("You win! ROCK beats SCISSORS!");
        outcome = 1;
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("You lose! ROCK beats SCISSORS!")
        outcome = 2;
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("You lose! SCISSORS beat PAPER!");
        outcome = 2;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("You win! SCISSORS beat PAPER!");
        outcome = 1;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("You win! PAPER beats ROCK!");
        outcome = 1;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("You lose! PAPER beats ROCK!");
        outcome = 2;
    } else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        outcome = 3;
    }
    return outcome;
}
// Let's play a few rounds
function game(timesToPlay){
    let userWins = 0;
    let computerWins = 0;
    for (let i = 0; i < timesToPlay; i++){
        let x = playRound(usersPlay(prompt("choose among: ROCK PAPER SCISSORS").toUpperCase()), computerPlay(getRandomNumber()));
        if (x == 1){
            userWins++;
        } else if (x == 2){
            computerWins++;
        } else if (x == 3){
            userWins = userWins;
            computerWins = computerWins;
        }
    }
    if(userWins > computerWins){
        console.log(`User wins! ${userWins} to ${computerWins}!`);
    } else if (userWins < computerWins) {
        console.log(`Computer wins ${computerWins} to ${userWins}!`)
    } else {
        console.log(`It's a tie ${computerWins} to ${userWins}!`)
    }

}

game(prompt("How many times you want to play?"));