function splitString(string, deli = NaN) {
  if (deli != deli) {
    console.log('Error: no delimiter')
  }
  let word = '';
  for (i = 0; i < string.length; i++) {
    if ((i === (string.length - 1)) && word !== '') {
      if (string[i] !== deli) {
        return console.log(word+string[i])
      } else {
        return console.log(word)
      }
    }
    if (string[i] != deli) {
      word += string[i]
    } else {
      if (word !== '') {
        console.log(word);
        word = ''
      }
    }
  }
}
splitString('abc,123,hello world', ','); //=> abc 123 hello world
splitString('hello'); // =>  ERROR: No delimiter
splitString('hello', ''); // => h e l l o
splitString('hello', ';'); // => hello
splitString(';hello;', ';'); // =>  (this is a blank line) hello