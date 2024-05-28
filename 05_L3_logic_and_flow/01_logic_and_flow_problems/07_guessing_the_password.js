const savedPassword = '1'

function guessPassword() {
  let prompt = 'Gizza password: ';
  let readlineSync = require('readline-sync');

  for (attemptCount = 1; attemptCount <= 3; attemptCount++) {
    let passwordAttempt = readlineSync.question(prompt);
    if (passwordAttempt === savedPassword) {
      console.log('You have successfully logged in.');
      break
    } else if (attemptCount == 3) {
      console.log(`You have been denied access`);
      break
    } else {
      console.log(`Incorrect password. You have ${3-attemptCount} remaining attempts`);
    }
  } 
}

guessPassword();