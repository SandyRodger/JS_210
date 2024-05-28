function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true
  } else if ((year % 100 === 0) && (year % 400 === 0)) {
    return true
  }
  return false
}

compare(isLeapYear(2016), true);
compare(isLeapYear(2015), false);
compare(isLeapYear(2100), false);
compare(isLeapYear(2400), true);
compare(isLeapYear(240000), true);
compare(isLeapYear(240001), false);
compare(isLeapYear(2000), true);
compare(isLeapYear(1900), false);
compare(isLeapYear(1752), true);
compare(isLeapYear(1700), false);
compare(isLeapYear(1), false);
compare(isLeapYear(100), false);
compare(isLeapYear(400), true);

function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}