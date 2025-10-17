

const prompt = require("prompt");


prompt.start();


prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();

  
  const randomNum = Math.random();
  let computerSelection;
  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

 
  console.log(`\nYou chose: ${userSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

 
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
