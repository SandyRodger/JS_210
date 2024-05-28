let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10); 
console.log(total); // 60
console.log(increment); // 15