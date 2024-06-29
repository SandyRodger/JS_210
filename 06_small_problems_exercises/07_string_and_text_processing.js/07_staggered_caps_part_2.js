function staggeredCase(str) {
  let output = ''
  let toUpper = true;
  for (i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-zA-Z]/gm) && toUpper) {
      output += str[i].toUpperCase();
      toUpper = false
    } else if (str[i].match(/[a-zA-Z]/gm)) {
      output += str[i].toLowerCase();
      toUpper = true
    } else {
      output += str[i];
    }
  }
  return output
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"