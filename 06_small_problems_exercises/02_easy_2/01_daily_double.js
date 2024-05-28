function crunch(str) {
  let output = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[i-1]) {
      output += str[i]
    }
  }
  return output
}

compare(crunch('ddaaiillyy ddoouubbllee'), "daily double");
compare(crunch('4444abcabccba'), "4abcabcba");
compare(crunch('ggggggggggggggg'), "g");
compare(crunch('a'), "a");
compare(crunch(''), "");

function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}