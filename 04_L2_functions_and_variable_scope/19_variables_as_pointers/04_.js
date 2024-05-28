let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords); // ['Hi', 'Bye']
console.log(myOtherWords); // ['Hello', 'Goodbye']