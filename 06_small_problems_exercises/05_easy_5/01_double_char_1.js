function repeater(str) {
  let output = ''
  for (i = 0; i < str.length; i += 0.5) {
    output += str[Math.floor(i)]
  }
  return output
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""