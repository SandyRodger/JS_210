function sequence(n) {
  let output = [];
  for (i = 1; i <= n; i++) {
    output.push(i)
  }
  console.log(output)
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]