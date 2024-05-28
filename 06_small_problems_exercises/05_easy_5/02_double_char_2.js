const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(str) {
  let output = []
  for (i = 0; i < str.length; i ++) {
    let char = str[i]
    if (VOWELS.includes(char.toLowerCase())) {
      output.push(char)
    } else {
      output.push(char, char)
    }
  }
  return output.join('')
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""