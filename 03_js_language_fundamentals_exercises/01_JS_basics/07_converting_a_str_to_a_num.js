const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function stringToInteger(str) {
  let output = 0
  for (i = 0; i < str.length; i++) {
    output *= 10;
    output += DIGITS[str[i]]
  }
  return output;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570