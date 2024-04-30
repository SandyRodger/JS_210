let temperatures = [36, 37, 38, 42, 100]

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

console.log(average(temperatures)); // 50.6