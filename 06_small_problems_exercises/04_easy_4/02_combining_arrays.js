function union(a1, a2) {
  let output = a1;
  for (i = 0; i < a2.length; i++) {
    if (!output.includes(a2[i])) {
      output.push(a2[i])
    }
  }
  return output
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]