function wordSizes(str) {
  if (str === '') {return {}}
  let arr = str.split(' ');
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    let currentLength = arr[i].length
    if (!Object.keys(obj).includes(String(currentLength))) {
      obj[currentLength] = 1;
    } else {
      obj[currentLength] += 1;
    }
  }
  return obj
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}