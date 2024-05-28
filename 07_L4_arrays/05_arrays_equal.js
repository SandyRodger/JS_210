function arraysEqual(arr1, arr2) {
  longerArr = arr1.length >= arr2.length ? arr1 : arr2
  shorterArr = arr1 !== longerArr ? arr2 : arr1
  for (i = 0; i < longerArr.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false
    }
  }
  return true
}

compare(arraysEqual([1], [1]), true);
compare(arraysEqual([1], [2]), false);
compare(arraysEqual([1, 2], [1, 2, 3]), false);
compare(arraysEqual([1, 'hi', true], [1, 'hi', true]), true);
compare(arraysEqual([1, 'hi', true], [1, 'hi', false]), false);
compare(arraysEqual([1, 'hi', true], [1, 'hello', true]), false);
compare(arraysEqual([1, 'hi', true], [2, 'hi', true]), false);

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`false: output is ${output}`);
  }
}