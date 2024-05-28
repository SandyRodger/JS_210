function multiplyList(a1, a2) {
  let output = [];
  for (i = 0; i < a1.length; i++) {
    output.push(a1[i] * a2[i])
  }
  return output;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]