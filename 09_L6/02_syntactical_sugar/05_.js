function product(array) {
  return array[0] * array[1] * array[2]
}

let array = [2, 3, 5];
let result = product(array);

// LS : (just as valid?)

function product1(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array1 = [2, 3, 5];
let result1 = product1(array1[0], array1[1], array1[2]);