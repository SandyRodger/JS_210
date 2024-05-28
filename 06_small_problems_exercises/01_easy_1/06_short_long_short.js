function shortLongShort(str1, str2) {
  let first = str1.length < str2.length ? str1 : str2;
  let second = first === str1 ? str2 : str1;
  console.log(first + second + first)
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"