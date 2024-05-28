let readline = require('readline-Sync');
let first = readline.question('enter a number greater than 0:\n')
let operation = readline.question('Choose: sum or product of 0 to this num (s/p)\n')
let array = [];

for (i = 1; i <= first; i++) {
  array.push(i)
}


if (operation === 's') {
  let output = array.reduce(
    (acc, val) => acc + val,
    0,
  );
  console.log(`The sum of the integers between 1 and ${first} is ${output}.`);
} else if (operation === 'p') {
  let output = array.reduce(
    (acc, val) => acc * val,
  );
  console.log(`The product of the integers between 1 and ${first} is ${output}.`);
} else {
  console.log(`invalid input: ${operation}`)
}
