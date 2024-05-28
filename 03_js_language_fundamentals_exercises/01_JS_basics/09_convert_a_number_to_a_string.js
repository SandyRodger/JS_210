/*

input = 4321 (number)

vars:

numLength = 4
divider = 1000
first digit:



*/


STR_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function findNumLength(num) {
  for (numLength = 0; numLength < num; numLength++) {
    num /= 10
  }
  return numLength
}

function createDivider(numLength) {
  let output = 1
  for (i = 1; i < numLength; i++) {
    output *= 10
  }
  return output
}

function returnFirstDigitAndRemainder(num, divider) {
  let count = 0;
  for (i = true; i === true;) {
    num -= divider
    count += 1
    if (num < divider) {
      return [count, num]
    }
  }
}

function integerToString(num) { 

  if (num === 0) {
    return '0'
  }

  let output = [];

  for (numLength = findNumLength(num); numLength > 0 ; numLength-- ) {
    let divider = createDivider(numLength)
    let firstDigitAndRemainder = returnFirstDigitAndRemainder(num, divider);
    // console.log(firstDigitAndRemainder)
    if (num === 0) {
      output.push('0')
    } else {
      output.push(STR_DIGITS[firstDigitAndRemainder[0]]) 
    }
    console.log(num)
    num = Math.round(firstDigitAndRemainder[1]);
  }

  return output.join('')
}

// console.log(integerToString(4321) === "4321")
// console.log(integerToString(1) === "1");
// console.log(integerToString(0) === "0");
console.log(integerToString(5000))// === "5000");