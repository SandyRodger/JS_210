let a = 'outer';

console.log(a); // outer
setScope(); // TypeError
console.log(a); 

var setScope = function () {
  a = 'inner';
};