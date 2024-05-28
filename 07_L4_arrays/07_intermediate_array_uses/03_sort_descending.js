function sortDescending(arr) {
  let output = arr.slice();
  return output.sort(compareNumbers)
}

function compareNumbers(a, b) {
  return a - b;
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]