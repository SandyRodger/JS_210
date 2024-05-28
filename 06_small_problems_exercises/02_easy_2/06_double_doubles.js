function twice(num) {
  let string = String(num);
  for (i = 0; i < string.length/2; i++) {
    if (string[i] !== string[(string.length/2) + i]) {
      return num * 2
    }
  }
  return num
}

compare(twice(37), 74);
compare(twice(44), 44);
compare(twice(334433), 668866);
compare(twice(444), 888);
compare(twice(107), 214);
compare(twice(103103), 103103);
compare(twice(3333), 3333);
compare(twice(7676), 7676);

function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}