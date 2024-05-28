function missing(arr) {
  let output = [];
  for (n = arr[0]; n < arr[arr.length - 1]; n++) {
    if (!arr.includes(n)) {
      output.push(n)
    }
  }
  return output;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []