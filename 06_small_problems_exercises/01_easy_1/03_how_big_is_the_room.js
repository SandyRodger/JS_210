let rlSync = require('readline-sync');

let widthMetres = Number(rlSync.question('Enter the Room width (metres):\n'));
let lengthMetres = Number(rlSync.question('Enter the room length (metres):\n'));
let squareMetreArea = widthMetres * lengthMetres;
let squareFeetArea = squareMetreArea * 10.7639

console.log(`Area: ${squareMetreArea} square metres`);
console.log(`Area: ${squareFeetArea} square feet`);