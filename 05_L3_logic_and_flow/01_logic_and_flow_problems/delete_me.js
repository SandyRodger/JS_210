function trimLeadingWhitespace(string) {
  for (index = 0; string[index] !== undefined; index++) {
    if (string[index] === ' ') {
      continue
    } else {
      return string.slice(index, -1)
    }
  }
}

function reverseString(string) {
  let output = '';
  console.log(string);
  let length = string.length
  for (index = -1; index === length; index--) {
    output += string[index]
  }
  return output
}

function trim(string, testString) {
  let noLeadingWhitespace = trimLeadingWhitespace(string);
  let reversedString = reverseString(noLeadingWhitespace);
  let strippedReversedString = trimLeadingWhitespace(reversedString);
  let finalString = reverseString(strippedReversedString);

  if (finalString === testString) {
    return 'True';
  } else {
    return `output is *${finalString}*`;
  }
}


console.log(trim('  abc  ', "abc"));
// console.log(trim('abc   ', "abc"));
// console.log(trim(' ab c', "ab c"));
// console.log(trim(' a b  c', "a b  c"));
// console.log(trim('      ', ""));
// console.log(trim(''), "");