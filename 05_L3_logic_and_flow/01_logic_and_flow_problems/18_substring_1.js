function substr(string, start, length) {
  let output = '';
  if (start < 0) {
    start += string.length
  }
  for (i = 0; i < length; i++) {
    if (string[i + start] === undefined) {
      return output
    } else {
      output += string[i + start]
    }
  }
  return output;
}

let string = 'hello world';

compare(substr(string, 2, 4),  "llo ");
compare(substr(string, -3, 2),  "rl");
compare(substr(string, 8, 20),  "rld");
compare(substr(string, 0, -20),  "");
compare(substr(string, 0, 0),  "");

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`Fail: output is '${output}'`)
  }
}