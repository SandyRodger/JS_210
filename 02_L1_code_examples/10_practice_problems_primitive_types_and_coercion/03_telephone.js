let npa = 212;
let nxx = 555;
let num = 1212;

console.log(String(npa) + String(nxx) + String(num)); // 2125551212

// LS solution:

npa = '' + npa;
nxx = nxx + '';
num += '';

console.log(npa + nxx + num);  // 2125551212