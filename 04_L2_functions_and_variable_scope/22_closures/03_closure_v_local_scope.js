function wrapper2() {
  let letters = ['a', 'b', 'c'];
  return letters
}

function wrapper(func) {
  func()
  let numbers = [1, 2, 3];
  
  function printNumbers(aNargument) {
    console.log(aNargument);
  }
  printNumbers(numbers); // => [ 1, 2, 3 ]
  printNumbers(letters); // => reference error
}

wrapper(wrapper2());
console.log(wrapper2()); // [Function: wrapper2]


// abandonato