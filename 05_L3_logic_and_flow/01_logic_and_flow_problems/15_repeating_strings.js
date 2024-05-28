function repeat(string, times) {
  let output = '';
  if ((times < 0) || (typeof times !== 'number')) {
    return undefined
  } else if (times === 0) {
    return ''
  }
  let i = 0;
  for (length = string.length * times; length > 0; length--) {
    output += string[i]
    i++;
    if (i === string.length) {
      i = 0
    }
  }
  return output
}
console.log(repeat('abc', 1));//, "abc"
console.log(repeat('abc', 2));//, "abcabc"
compare(repeat('abc', 1), "abc");
compare(repeat('abc', 2), "abcabc");
compare(repeat('abc', -1), undefined);
compare(repeat('abc', 0), "");
compare(repeat('abc', 'a'), undefined);
compare(repeat('abc', false), undefined);
compare(repeat('abc', null), undefined);
compare(repeat('abc', '  '), undefined);

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`Fail: output is ${output}`)
  }
}