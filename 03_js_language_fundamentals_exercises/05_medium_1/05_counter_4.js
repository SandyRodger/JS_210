/* The lesson: 

1. Function declaration causes a variable to be created. Both name and body are hoisted
2. Variable declaration only hoists the name, not the assignment.
3. Functions are hoisted above Variables names.

*/

// Original code:

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// raises an exception during the creation phase, before any hoisting takes place.