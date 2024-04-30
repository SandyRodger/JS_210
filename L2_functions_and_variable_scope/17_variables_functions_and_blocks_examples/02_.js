let myVar = [1];

function myFunc() {
  myVar = [2];
}

myFunc();
console.log(myVar); // [2]