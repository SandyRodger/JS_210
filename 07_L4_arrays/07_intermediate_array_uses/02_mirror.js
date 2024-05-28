function mirror(arr) {
  let output = [];
  for (i = 0; i < arr.length; i++) {
    output.push(arr[i])
  }
  for (i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i])
  }
  return output
}

arr = [1 ,2 , 3, 'a', true]
console.log(mirror(arr));  // [1 , 2, 3, 'a', true, true, 'a', 3, 2, 1]