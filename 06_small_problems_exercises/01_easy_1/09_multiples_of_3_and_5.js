function multisum(limit) {
  let output = 0
  for (n = 1; n <= limit; n++) {
    if ((n % 3 === 0) || (n % 5 === 0)) {
      output += n
    }
  }
  console.log(output);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}