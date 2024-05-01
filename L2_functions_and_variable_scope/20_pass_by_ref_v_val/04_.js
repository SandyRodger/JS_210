function changeMyWords(words) {
  console.log(words); // ['Hello', 'Goodbye']
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hi', 'Goodbye']