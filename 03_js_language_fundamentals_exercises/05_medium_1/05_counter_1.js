var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// after hoisting this becomes:

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate)); // => The total value is 15

/* The lesson: 

1. Function declaration causes a variable to be created. Both name and body are hoisted
2. Variable declaration only hoists the name, not the assignment.
3. Functions are hoisted above Variables names.

*/