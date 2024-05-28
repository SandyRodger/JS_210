function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice(0)
  }
  return arr.slice(arr.length - count)
}

let digits = [4, 8, 15, 16, 23, 42];
let digits2 = lastNOf(digits, 8);    // returns [23, 42]
console.log(digits === digits2)