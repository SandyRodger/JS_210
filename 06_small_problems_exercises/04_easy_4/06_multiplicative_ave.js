function showMultiplicativeAverage(arr) {
  // let initialVal = 0;
  let output = arr.reduce((acc, val) => acc * val);
  let ave = output/arr.length;
  return ave.toFixed(3)
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"