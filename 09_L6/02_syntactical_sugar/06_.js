function product() {
  return Object.values(arguments).reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result)