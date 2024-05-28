const ARR = [1111, 3, 2];

function smush(arr) {
  let output = '';
  for (i = 0; i < arr.length; i++) {
    output += arr[i]
  }
  return output;
}

console.log(smush(ARR));