console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3

console.log(foo);
let foo; // ReferenceError : cannot access before initialization
console.log(qux);
const qux = 42 // Reference Error : cannot access before initialization
console.log(baz); // Reference Error : not defined