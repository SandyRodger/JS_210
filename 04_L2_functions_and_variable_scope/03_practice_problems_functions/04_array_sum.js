function arraySum(arr) {
  let length = arr.length;
  let total = 0;
  for (let index = 0; index < length; index++) {
    total += arr[index]
  } 
  return total;
}

function average(arr) {
  return arraySum(arr)/arr.length;
}

console.log(average([3, 3, 3])); // => 3
console.log(average([45, 300, 1])); // 115.33333333333333
console.log(average([2, 3, 4, 5, 6, 7, 8])); // 8