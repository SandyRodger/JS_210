function slice(arr, i1, i2) {
  let output = [];
  let takeValue = false;
  for (i = 0; i < arr.length; i++) {
    if (i === i1) {
      takeValue = true
    } else if (i === i2) {
      takeValue = false
    }
    if (takeValue) {
      output[output.length] = arr[i]
    }
  }
  return output;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]