function push(arr, n) {
  arr[arr.length] = n;
  return arr.length;
}

let count = [0, 1, 2];
push(count, 3);         // 4
console.log(push(count));                  // [ 0, 1, 2, 3 ]