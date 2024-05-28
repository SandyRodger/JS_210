
function returnFirstDigit(num, divider) {
  let count = 0;
  for (i = true; i === true;) {
    num -= divider
    count += 1
    if (num < divider) {
      return count
    }
  }
}

let n = returnFirstDigit(4321, 1000);
console.log(n)