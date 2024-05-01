function changeMyWord(word) {
  console.log(word); // Hello
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord); // HELLO