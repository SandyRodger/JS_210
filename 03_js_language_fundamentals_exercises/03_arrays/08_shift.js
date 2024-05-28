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

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]