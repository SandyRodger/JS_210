function indexOf(arr, n) {
  let output = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      output = i
    }
  }
  return output
};

console.log(indexOf([1, 2, 3, 3], 3));         // 3
console.log(indexOf([1, 2, 3], 4));            // -1