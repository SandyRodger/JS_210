function multiplyAllPairs(a1, a2) {
  let output = [];
  a1.forEach(function(n1) {
    a2.forEach(n2 => output.push(n1 * n2))
  })
  return output.sort((n1, n2) => n1 > n2 ? 1 : -1)
  //LS solution sorts like this:   return result.sort((a, b) => a - b);
}

let r = multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

console.log(r);
