// function substrings(str) {
//   let output = [];
//   for (start = 0; start <= str.length; start += 1) {
//     for (end = start + 1; end <= str.length; end += 1) {
//       output.push(str.slice(start, end))
//     }
//   }
//   return output
// } 

function substrings(str) {

  let arr = str.split('');

  let output = arr.map((letter) => {
    let index = arr.indexOf(letter);
    let string = arr.slice(index)
    return leadingSubstrings(string)
  })

  return output
} 

function leadingSubstrings(str) {
  let output = [];
  for (i = 1; i <= str.length; i += 1) {
     output.push(str.slice(0, i).join(""))
    }
  return output
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]