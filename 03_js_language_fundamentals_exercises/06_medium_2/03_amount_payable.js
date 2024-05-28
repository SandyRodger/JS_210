let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); //

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); //

// KEY : functions RETAIN ACCESS to the scope in which they were created.