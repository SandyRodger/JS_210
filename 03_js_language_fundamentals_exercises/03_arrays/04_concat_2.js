function concat(arr1) {
  let output = arr1.slice();
  for (i = 1; i < arguments.length; i++) {
    let currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (i2 = 0; i2 < currentArg.length; i2++) {
        output[output.length] = currentArg[i2]
      }
    } else {
      output[output.length] = currentArg
    }
  } 
  return output;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]