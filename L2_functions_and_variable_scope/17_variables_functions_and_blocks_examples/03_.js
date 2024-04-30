let myVar = [1];

function myFunc() {
  myVar[0] = 2;
}

myFunc();
console.log(myVar); // [2]