let shift = function(arr) {
  output = arr[0]
  for (i = 1; i < arr.length+1; i++) {
    arr[i-1] = arr[i]
  }
  arr.length = arr.length-1
  return output
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]