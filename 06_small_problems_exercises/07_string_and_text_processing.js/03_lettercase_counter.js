function letterCaseCount(str) {
  let lowerLetters = str.match(/[a-z]/gm);
  let upperLetters = str.match(/[A-Z]/gm);
  let neither = str.match(/[^a-zA-Z]/gm);

  return {
    lowercase: (lowerLetters ? lowerLetters.length : 0),
    uppercase: (upperLetters ? upperLetters.length : 0),
    neither: (neither ? neither.length : 0),
  }
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }