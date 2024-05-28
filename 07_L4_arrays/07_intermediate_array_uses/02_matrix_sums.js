function matrixSums(arr) {
  let output =[];
  arr.forEach((subArr) => {
    let sum = subArr.reduce((a, v) => a + v);
    output.push(sum)
  })
  return output
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]