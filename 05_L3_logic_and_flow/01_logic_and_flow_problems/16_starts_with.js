function startsWith(string, searchString) {
  if (searchString === '') {
    return true
  }
  for (i = 0; i !== searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false
    }
  }
  return true
}

let str = 'We put comprehension and mastery above all else';
compare(startsWith(str, 'We'), true);
compare(startsWith(str, 'We put'), true);
compare(startsWith(str, ''), true);
compare(startsWith(str, 'put'), false);

let longerString = 'We put comprehension and mastery above all else!';
compare(startsWith(str, longerString), false);

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`Fail: output is ${output}`)
  }
}