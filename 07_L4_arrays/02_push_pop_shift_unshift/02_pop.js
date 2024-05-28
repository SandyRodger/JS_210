function pop(arr) {
  let output = arr[arr.length - 1];
  arr.length -= 1
  return output
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]