let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc();
console.log(myVar); // [1]