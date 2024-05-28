function sugar(first, a2, a3, a4, last) {
  return {
    first,
    last,
    middle: [a2, a3, a4],
  }
}

let arr = [1, 2, 3, 4, 5]
let {first, last, middle} = sugar(...arr);

console.log(first);
console.log(last);
console.log(middle);