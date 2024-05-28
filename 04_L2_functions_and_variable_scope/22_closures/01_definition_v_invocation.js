function wrapper() {
  let numbers = [1, 2, 3];
  
  function printNumbers() {
    console.log(numbers);
  }
  printNumbers(); // => [ 1, 2, 3 ]
}

wrapper();
printNumbers(); // => ReferenceError