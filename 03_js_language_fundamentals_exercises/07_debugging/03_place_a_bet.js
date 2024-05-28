let readlineSync = require("readline-sync")

function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return `Wrong-o! You lose. The number was ${winningNumber}`;
  }
}

function alert(string) {
  console.log(string);
};

const userGuess = parseInt(readlineSync.question('Input a guess between 1-25\n'), 10);
alert(placeABet(userGuess));