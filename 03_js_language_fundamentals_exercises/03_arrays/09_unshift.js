function shift(arr) {
  let output = arr[0]
  for (i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]
  }
  if (arr.length > 0) {
    arr.length = (arr.length - 1)
  }
  return output
}

function unshift(arr) {
  let output = [];
  for (i = 1; i < arguments.length; i++) {
    output[i - 1] = arguments[i]
  }
  for (i = 0; i < arr.length; i++) {
    output[output.length] = arr[i]
  }
  for (i = 0; i < output.length; i++) {
    arr[i] = output[i]
  }
  return output.length
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]