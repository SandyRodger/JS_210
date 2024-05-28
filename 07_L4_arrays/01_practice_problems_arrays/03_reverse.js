ARR = [1, 2, 3, 4];

function reverse(arr) {
  let newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

console.log(reverse(ARR));