function changeMyWords(words) {
  console.log(words); // ['Hello', 'Goodbye']
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hello', 'Goodbye']