// function isPrime(number) {
//   if (number <= 1) {
//     return false
//   }
//   for (counter = 2; counter < number; counter++) {
//     if (number % counter === 0) {
//       return false
//     }
//   }
//   return true
// }

function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}

console.log(isPrime(1) ===  false);
console.log(isPrime(2) ===  true);
console.log(isPrime(3) ===  true);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0) ===  false);