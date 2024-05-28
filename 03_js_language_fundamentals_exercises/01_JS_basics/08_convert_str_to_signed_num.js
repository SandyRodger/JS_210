
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function stringToInteger(str) {
  let output = 0
  for (i = 0; i < str.length; i++) {
    output *= 10;
    output += DIGITS[str[i]]
  }
  return output;
}

function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return 0 - stringToInteger(str.slice(1));
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100