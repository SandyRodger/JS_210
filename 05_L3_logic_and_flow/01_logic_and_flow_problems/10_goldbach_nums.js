function isPrime(number) {
  if (number <= 1) {
    return false
  }
  for (counter = 2; counter < number; counter++) {
    if (number % counter === 0) {
      return false
    }
  }
  return true
}

function createArrayOfPrimesUpTo(upperLimit) {
  output = []
  for (primeCandidate = 2; primeCandidate < upperLimit; primeCandidate++) {
    if (isPrime(primeCandidate)) {
      output.push(primeCandidate);
    }
  }
  return output
}

function checkGoldbach(expectedSum) {
  if (expectedSum <= 3) {
    console.log('null');
  }

  let primes = createArrayOfPrimesUpTo(expectedSum);

  primes.forEach(function(p) {
    let remainder = expectedSum - p;
    if (remainder > expectedSum/2) {
      return;
    } else if (isPrime(remainder)) {
      console.log(`${remainder} ${p}`)
    }
  })

}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
