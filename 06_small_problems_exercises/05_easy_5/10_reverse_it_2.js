function reverseWords(str) {
  let words = str.split(' ');
  let output = ''
  for (i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      let reversedWord = words[i].split('').reverse().join('');
      output += reversedWord
    } else {
      output += words[i]
    }
    output += ' '
  }
  console.log(output)
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"