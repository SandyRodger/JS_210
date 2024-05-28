function runningTotal(arr) {
  
  if (arr.length === 0) { return []  }

  let output = [arr[0]];
  for (i = 1; i < arr.length; i++) {
    output.push(output[output.length - 1] + arr[i])
  }
  return output
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []