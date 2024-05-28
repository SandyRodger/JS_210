let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // Hello