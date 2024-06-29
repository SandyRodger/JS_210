/*
P

write a function which takes a number ("number") and returns a number rearranged according to the following rules:

- take the first digit and stick it on the end 
  - 735291: we take the 7 and append it so "number" now = 352917
- take Number from index 1 to the end and repeat step 1
  - number = 352917
  - ignore the 3
  - 52917 : we take the 5 and append it = 29175
- Take the number (329175) and now ignroe the 1st 2 digits.
  - number from index 2 = 9175
  - rotate this section = 1759
  - 321795

  and so on...

D: 

number
converting to string
possibly using an array as a container
iteration

A:

- initialize index = 0
- take arr number at 0

arr.push(arr.shift())

*/

function rotateLeftmostDigits(string, n) {
  let sectionToRotate = string.slice(n-1, string.length)

  return sectionToRotate.slice(1) + sectionToRotate[0]
}

function maxRotation(number) {
  let string = String(number)
  let output = string.split('')

  for (i = 1; i < string.length; i += 1) {
    output.splice(i, string.length - i, rotateLeftmostDigits(string, i))
    console.log(output.join('').slice(i, string.length + i))
  }

  return output.join('');
}

console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845