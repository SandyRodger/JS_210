let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // => outer
testScope();    // => inner
console.log(a); // => outer