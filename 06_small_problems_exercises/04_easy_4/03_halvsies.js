function halvsies(arr) {
  let output = [[], []];
  for (i = 0; i < arr.length; i++) {
    output[i >= arr.length/2 ? 1 : 0].push(arr[i])
  }
  return output
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]