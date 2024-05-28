// function logMultiples(n) {
//   for (counter = 100; counter >= n; counter--) {
//     if ((counter % n === 0) && (counter % 2 === 1)) {
//       console.log(counter);
//     }
//   }
// }

// logMultiples(17);
// // output (5x, 3x and 1x)
// 85
// 51
// 17

// logMultiples(21);
// // output (3x and 1x)
// 63
// 21

// LS alternative: determine the number's largest multiple and then decrement by the number itself and break when it's negative.

function logMultiples(number) {
  let largestMultiple = Math.floor(100/number) * number;
  console.log(largestMultiple)
  for (largestMultiple > 0; largestMultiple -= number;) {
    if (largestMultiple % 2 == 1) {
      console.log(largestMultiple);
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21

// LS version:

function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number;

  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= number;
  }
}