let readlineSync = require('readline-sync');
let scores = []

for (counter = 1; counter <= 3; counter ++) {
  scores.push(Number(readlineSync.question(`Enter score ${counter}: `)))
}

initialValue = 0
let total = scores.reduce(
  (acc, val) => acc + val,
  initialValue,
);

let average = total/3
let letterGrade = ''

if (average >= 90) {
  letterGrade = 'A'
} else if (average >= 70) {
  letterGrade = 'B'
} else if (average >= 50) {
  letterGrade = 'C'
} else {
  letterGrade = 'F'
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`)

// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// // log to the console
// Based on the average of your 3 scores your letter grade is "B".