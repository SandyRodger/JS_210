function gcd(a, b) {
  for (divisor = a > b ? a : b; divisor >= 1; divisor--) {
    if ((a % divisor === 0) && (b % divisor === 0)) {
      return divisor
    }
  } 
}

// LS solution hurts my brain in a good way:

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
console.log(gcd(12, 4) === 4);
console.log(gcd(15, 10) === 5);
console.log(gcd(9, 2) === 1);