function wordSizes(str) {
  if (str === '') {return {}}
  let arr = str.split(' ');
  let StrippedStr = str.toLowerCase();
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    let currentLength = arr[i].replaceAll(/\W/g, '').length
    if (!Object.keys(obj).includes(String(currentLength))) {
      obj[currentLength] = 1;
    } else {
      obj[currentLength] += 1;
    }
  }
  return obj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}