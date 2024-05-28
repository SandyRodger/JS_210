function reverse(str) {
  let output = '';
  for (i = (str.length-1); i >= 0; i--) {
    output += str[i]
  }
  return output
}

function trimLeadingWhitespace(string) {
  let output = '';
  for (i1 = 0; i1 <= string.length; i1++) {
    if (string[i1] !== ' ') {
      for (i1; i1 < string.length; i1++) {
        output += string[i1]
      }
      return output
    }
  }
}

function trim(str1, testStr) {
  let a = trimLeadingWhitespace(str1);
  let b = reverse(a);
  let c = trimLeadingWhitespace(b);
  let d = reverse(c)
  return d === testStr;
}

console.log(trim('  abc  ', "abc"));
console.log(trim('abc   ', "abc"));
console.log(trim(' ab c', "ab c"));
console.log(trim(' a b  c', "a b  c"));
console.log(trim('      ', ""));
console.log(trim('', ""));