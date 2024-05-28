function oddElementsOf(arr) {
  let output = [];
  for (i = 1; i < arr.length; i += 2) {
    output.push(arr[i])
  }
  return output
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]