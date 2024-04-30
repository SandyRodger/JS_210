function arrayAverages(arr) {
  let length = arr.length;
  let total = 0;
  for (let index = 0; index < length; index++) {
    total += arr[index]
  } 
  return total/length;
}

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

console.log(arrayAverages([3, 3, 3])); // => 3
console.log(arrayAverages([45, 300, 1])); // 115.333333333
console.log(arrayAverages([2, 3, 4, 5, 6, 7, 8])); // 5