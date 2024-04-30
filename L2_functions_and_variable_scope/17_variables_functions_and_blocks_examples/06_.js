let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2; // at this point myVar is an undefined variable
}

myFunc(); // TypeError: Cannot set properties of undefined (setting '0')
console.log(myVar);