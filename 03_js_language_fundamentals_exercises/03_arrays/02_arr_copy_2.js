function copyValues1(arr) {
  let output = [];
  for (i = 0; i < arr.length; i++) {
    output.push(arr[i])
  }
  return output
}

function copyValues2(arr) {
  return arr.slice()
}

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

let copy1 = copyValues1(myArray);
let copy2 = copyValues2(myArray);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
console.log(copy1);
console.log(copy2);

