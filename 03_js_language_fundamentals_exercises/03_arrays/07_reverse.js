function reverse(arg) {
  let output
  if (Array.isArray(arg)) {
    output = [];
    for (i = arg.length - 1; i >= 0; i--) {
      output[output.length] = arg[i]
    }
  } else {
    output = '';
    for (i = arg.length - 1; i >= 0; i--) {
      output += arg[i]
    }
  }
  return output
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]