function endsOf(arr1, arr2) {
  return [arr1[0], arr2[arr2.length-1]]
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]