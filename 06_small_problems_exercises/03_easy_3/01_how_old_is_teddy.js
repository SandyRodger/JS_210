function teddysAge() {
  let min = 20;
  let max = 200 + 1;
  let age = Math.floor(Math.random() * (max - min) + min);
  console.log(`Teddy is ${age} years old!`);
}

teddysAge()
// 