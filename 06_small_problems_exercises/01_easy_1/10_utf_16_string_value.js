function utf16Value(str) {
  let output = 0;
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    output += char.charCodeAt()
  }
  console.log(output);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0


function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}