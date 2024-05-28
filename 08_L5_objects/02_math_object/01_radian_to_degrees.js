function convertRadiansToDegrees(r) {
  return (r * 180)/Math.PI
}

console.log(convertRadiansToDegrees(6.283)); // 359.9893826806963
console.log(convertRadiansToDegrees(2 * Math.PI)); // 360

// LS:

let radiansToDegrees = radians => radians / (Math.PI / 180);

console.log(radiansToDegrees(2 * Math.PI)) // 360