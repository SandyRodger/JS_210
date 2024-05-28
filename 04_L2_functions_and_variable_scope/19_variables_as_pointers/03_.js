let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myOtherWords); // ['Hi', 'Goodbye']