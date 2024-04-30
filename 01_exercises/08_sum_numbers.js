let rlSync = require('readline-sync');

let num1 = Number(rlSync.question('Enter the 1st number\n'));
let num2 = Number(rlSync.question('Enter the 2nd number\n'));
let sum = num1 + num2;

console.log(`The numbers ${num1} and ${num2} add to ${sum}`);