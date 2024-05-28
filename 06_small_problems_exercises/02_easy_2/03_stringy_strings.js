function stringy(num) {
  let output = '1';
  for (i = 2; i <= num; i++) {
    output += i % 2 == 0 ? 0 : 1;
  }
  return output;
}

compare(stringy(6), "101010");
compare(stringy(9), "101010101");
compare(stringy(4), "1010");
compare(stringy(7), "1010101");

function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}