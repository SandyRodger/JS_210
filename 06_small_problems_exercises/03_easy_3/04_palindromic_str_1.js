function isPalindrome(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i +1)]) {
      return false
    }
  }
  return true
}


// LS : return string === string.split('').reverse().join('');

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true