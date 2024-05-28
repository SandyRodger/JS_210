function average(arr) {
  let total = arr.reduce((acc, val) => acc + val);
  let ave = total / arr.length
  return  Math.floor(ave)
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40