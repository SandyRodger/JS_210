function slice(array, begin, end) {
  let output = []
  for (i = begin; (i < end && i < array.length); i++) {
    output[output.length] = array[i]
  }
  return output
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

let arr2 = [1, 4, 6, 7]
let arr3 = arr2.slice()
console.log(arr3)