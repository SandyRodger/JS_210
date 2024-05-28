/* The lesson: 

1. Function declaration causes a variable to be created. Both name and body are hoisted
2. Variable declaration only hoists the name, not the assignment.
3. Functions are hoisted above Variables names.

*/

// Original code:

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;


// becomes :

function counter(count) {
  // ...
}

var rate;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is NaN

counter = 5;
rate = 3;