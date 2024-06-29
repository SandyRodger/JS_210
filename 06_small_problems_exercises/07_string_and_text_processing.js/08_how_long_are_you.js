let str = 'cow sheep pig'

// function test(str) {
//   console.log(str.split(' '))
// }

// test(str);

function wordLengths(str) {
  return !arguments[0] ? [] : str.split(' ').map((word) => word + " " + word.length)
}

console.log(wordLengths(str));

// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []