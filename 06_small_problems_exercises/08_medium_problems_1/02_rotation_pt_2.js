function rotateRightmostDigits(number, n) {
  let string = String(number)
  let sectionToRotate = string.slice(string.length - n)

  return string.slice(0, string.length - n) + sectionToRotate.slice(1) + sectionToRotate[0]

}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917