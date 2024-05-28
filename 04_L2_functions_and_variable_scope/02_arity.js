function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

takeTwo(1, 2); // 1 2 3
takeTwo(1); // 1 undefined NaN
takeTwo(1, 2, 4); // 1 2 3