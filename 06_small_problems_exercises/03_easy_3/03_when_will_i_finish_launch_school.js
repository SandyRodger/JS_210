const readlineSync = require("readline-sync");

let age = readlineSync.question("How old are you?\n")
let finishingage = readlineSync.question("How hold will you be when you finish Launch School?\n")

difference = finishingage - age

console.log(`Then you have ${difference} year(s) to complete the course`)