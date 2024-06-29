function staggeredCase(str) {
  let output = ''
  for (i = 0; i < str.length; i += 1) {
    if (i % 2 === 1) {
      output += str[i].toLowerCase();
    } else {
      output += str[i].toUpperCase();
    }
  }
  return output
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"