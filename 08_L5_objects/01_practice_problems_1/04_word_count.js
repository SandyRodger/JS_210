function wordCount(str) {
  let words = str.split(' ');
  let output = {};

  for(i = 0; i < words.length; i++) {
    if (output[words[i]]) {
      output[words[i]] += 1
    } else {
      output[words[i]] = 1
    }
  }

  return output
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }