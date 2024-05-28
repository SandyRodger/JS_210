function toLowerCase(string) {
  let output = '';
  let asciiNumeric;
  // console.log(string);
  for (i = 0; i < string.length; i++) {
    // console.log(string[i])
    asciiNumeric = string[i].charCodeAt(0);
    if ((asciiNumeric >= 65) && (asciiNumeric <= 90)) {
      output += String.fromCharCode(asciiNumeric + 32)
    } else {
      output += string[i]
    }
  }
  return output;
}

compare(toLowerCase('ALPHABET'), "alphabet");
compare(toLowerCase('123'), "123");
compare(toLowerCase('abcDEF'), "abcdef");

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`Fail: output is '${output}'`)
  }
}