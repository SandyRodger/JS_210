function invoiceTotal(...amounts) {
  const starterVal = 0
  let output = amounts.reduce(
    (acc, val) => acc + val,
    starterVal,
  );
  return output
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?