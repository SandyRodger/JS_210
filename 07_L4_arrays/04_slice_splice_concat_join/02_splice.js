function splice(arr, i1, n) {
  let output = [];
  let outputIndex = 0;
  let newArrIndex = 0;
  let takeValue = false
  
  for (i = 0; i < arr.length; i++) {
    if (i === i1) {
      takeValue = true
    }
    if (output.length === n) {
      takeValue = false
    }
    if (takeValue) {
      output[outputIndex] = arr[i]
      outputIndex += 1
    } else {
      arr[newArrIndex] = arr[i]
      newArrIndex += 1
    }
  }
  arr.length = arr.length - n
  return output;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

// LS solution:

// function splice(array, begin, number) {
//   let removedValues = [];
//   for (let index = begin; index < array.length; index += 1) {
//     if (index < begin + number) {
//       push(removedValues, array[index]);
//     }

//     array[index] = array[index + number];
//   }

//   array.length = array.length - removedValues.length;
//   return removedValues;
// }

function push(arr, n) {
  arr[arr.length] = n;
  return arr.length;
}
