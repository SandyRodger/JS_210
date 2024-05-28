const LOWER_ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' ,'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' ,'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const UPPER_ALPHABET = ['A', 'B', 'C', 'D', 'E',  'F', 'G', 'H', 'I', 'J',  'K', 'L', 'M', 'N', 'O',  'P', 'Q', 'R', 'S', 'T',  'U', 'V', 'W', 'X', 'Y',  'Z', 'A', 'B', 'C', 'D', 'E',  'F', 'G', 'H', 'I', 'J',  'K', 'L', 'M', 'N', 'O',  'P', 'Q', 'R', 'S', 'T',  'U', 'V', 'W', 'X', 'Y',  'Z']

function rot13(string) {
  let output = '';
  let index;
    for (i = 0; i < string.length; i++) {
      if (LOWER_ALPHABET.includes(string[i])) {
        index = LOWER_ALPHABET.indexOf(string[i])
        output += LOWER_ALPHABET[index+13]
      } else if (UPPER_ALPHABET.includes(string[i])) {
        index = UPPER_ALPHABET.indexOf(string[i])
        output += UPPER_ALPHABET[index+13]
      } else {
        output += string[i]
      }
    }
  return output
}

compare((rot13('Teachers open the door, but you must enter by yourself.')), 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.')

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`Fail: output is '${output}'`)
  }
}