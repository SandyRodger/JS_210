const readlineSync = require("readline-sync");

function getFiveNums() {
  let output = [];
  for (counter = 1; counter <= 6; counter++) {
    let input = readlineSync.question(counter + ". Enter a number:\n");
    output.push(Number(input))
  }
  return output
}

function checkForNum(array, num) {
  if (array.includes(num)) {
    console.log(`The number ${num} appears in ${array}`)
  } else {
    console.log(`The number ${num} does not appear in ${array}`)
  }
}

let nums = getFiveNums();
checkForNum(nums, 10);