function randomNumber( max) {
  return Math.floor(Math.random() * max);
}
const computerNumber = randomNumber(3);
function computerSelector(computerNumber){
    if (computerNumber === 1){
        computerChoice = "rock";
    }
    else if (computerNumber ===2){
        computerChoice = "paper";
    }
    else if (computerNumber === 0){
        console.log("try again");
    }
    else{
        computerChoice = "scissors";
    }
}




