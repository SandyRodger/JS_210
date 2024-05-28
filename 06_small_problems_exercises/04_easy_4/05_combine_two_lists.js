function interleave(a1, a2) {
  let output = [];
  for (i = 0; i < a1.length; i++) {
    output.push(a1[i])
    output.push(a2[i])
  }
  return output
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]