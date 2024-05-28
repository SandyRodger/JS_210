function sequence(count, start) {
  if (count === 0) { return []}
  let output = [start];
  let initialVal = start
  for (counter = 1; counter < count; counter++) {
    output.push(start + output[output.length - 1])
  }
  console.log(output)
} 

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []