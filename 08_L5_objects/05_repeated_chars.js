function filterForMultiples(obj) {
  let output = {};
  for (let k in obj) {
    if (obj[k] > 1) {
      output[k] = obj[k]
    }
  }
  return output
}

function repeatedChars(str) {
  let chars = str.toLowerCase().split('');
  let output = {};
  for (i = 0; i < chars.length; i++) {
    if (Object.keys(output).includes(chars[i])) {
      output[chars[i]] += 1
    } else {
      output[chars[i]] = 1
    }
  }
  return filterForMultiples(output)
}

console.log(repeatedChars('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedChars('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedChars('Pet'));            // {}
console.log(repeatedChars('Paper'));          // { p: 2 }
console.log(repeatedChars('Baseless'));       // { s: 3, e: 2 }

// LS:

function repeatedCharacters(string) {
  let result = {};
  let lowerCaseString = string.toLowerCase();

  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (result[lowerCaseString[index]] !== undefined) {
      result[lowerCaseString[index]] += 1;
    } else {
      result[lowerCaseString[index]] = 1;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}