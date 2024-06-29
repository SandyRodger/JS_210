function substrings(str) {
  let output = [];
  for (start = 0; start <= str.length; start += 1) {
    for (end = start + 1; end <= str.length; end += 1) {
      output.push(str.slice(start, end))
    }
  }
  return output
} 

function palindromes(str) {
  if (str.length === 1) {
    return []
  }

  let subStrings = substrings(str)
  return subStrings.filter((word) => isPalindrome(word))
}


function isPalindrome(str) {
  for (i = 0; i <= str.length; i += 1) {
    if ((str[i] !== str[(str.length - (i + 1))]) || str.length === 1) {
      return false
    }
  }
  return true
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]