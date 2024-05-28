function nthElemOf(arr, n) {
  return arr[n]
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElemOf(digits, 3));   // returns 16
console.log(nthElemOf(digits, 8));   // what does this return?
console.log(nthElemOf(digits, -1));  // what does this return?