const readlineSync = require("readline-sync");

console.log("Please enter a phrase:");
let input1 = readlineSync.prompt();
console.log(`There are ${input1.length} characters in "${input1}"`)

// LS solution:

const input = prompt('Please enter a phrase:');
const numberOfCharacters = String(input.length);

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);