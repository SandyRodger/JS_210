function reverse(str) {
  let output = '';
  for (i = (str.length-1); i >= 0; i--) {
    output += str[i]
  }
  return output
}

function findFirstNonWhitespaceChar(string) {
  let i = 0;
  while (i < string.length) {
    if (string[i] !== ' ') {
      return i;
    }
    i++;
  }
  return false
}

function trimLeadingWhitespace(string) {
  let output = '';
  let startingIndex = findFirstNonWhitespaceChar(string);
  if (typeof startingIndex !== 'number') {
    return false
  }
  for (i1 = startingIndex; i1 < string.length; i1++) {
    output += string[i1]
  }
  return output
}


function trim(str1, testStr) {
  let a = trimLeadingWhitespace(str1);
  if (!a) { return '' === testStr};
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