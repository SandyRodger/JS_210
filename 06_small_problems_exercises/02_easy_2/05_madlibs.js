let readline = require('readline-Sync');

let noun = readline.question('Enter a noun:\n');
let verb = readline.question('Enter a verb:\n');
let adjective = readline.question('Enter an adjective:\n');
let adverb = readline.question('Enter an adverb:\n');

console.log(`You ${verb} your ${noun} ${adverb}, which I consider to be ${adjective}`);