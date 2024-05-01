function changeMyWord(word) {
  console.log(word); // Hello
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord); // Hello
console.log(myOtherWord); // HELLO