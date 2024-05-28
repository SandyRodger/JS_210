function inclusiveRand(n1, n2) {
  output =  Math.random() * (n1 - n2 + 1) + n2;
  return Math.floor(output)
}

console.log(inclusiveRand(1, 10));
console.log(inclusiveRand(100, 10));