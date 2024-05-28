function concat(arr1, arr2) {
  let output = new Array(arr1.length + arr2.length);
  let i2 = 0;
  for (i = 0; i < (arr1.length + arr2.length); i++) {
    if (i < arr1.length) {
      output[i] = arr1[i]
    } else {
      output[i] = arr2[i2]
      i2 += 1
    }
  }
  return output
}

let a1 = [1, 2, 3];
console.log(concat(a1, [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
console.log(a1); // => [1, 2, 3]