function randomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}
let computerChoice;
const computerNumber = randomNumber(1,3);
function computerSelector(computerNumber){
    if (computerNumber === 1){
        computerChoice = "rock";
    }
    else if (computerNumber === 2){
        computerChoice = "paper";
    }
    else if (computerNumber === 0){
        console.log("try again");
    }
    else{
        computerChoice = "scissors";
    }
}
let rock;
let paper;
let scissors;
let playerChoice = prompt("Pick rock, paper, or scissors");
function gameRound(playerChoice, computerChoice){
    if (playerChoice === rock && computerChoice === paper){
    return("You lost!");
}
    else if (playerChoice === rock && computerChoice === scissors){
        return("You won!");
    }
    else if (playerChoice === paper && computerChoice === rock){
        return("You won!");
    }
    else if (playerChoice === paper && computerChoice === scissors){
        return("You lost!");
    }
    else if (playerChoice == scissors && computerChoice == paper){
        return("You won!")
    }
    else if (playerChoice == scissors && computerChoice == rock){
        return("You lost!");
    }
}
console.log(computerNumber);
computerSelector(computerNumber);
console.log(computerChoice);
console.log(playerChoice);
gameRound();