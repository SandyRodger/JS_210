let name = 'Julian';       // `name` is in global scope

function greet() {         // `greet` is also in global scope
  let counter = 0;         // `counter` is in function scope
  while (counter < 3) {
    let myName = name;     // `myName` is in block scope
    console.log(myName);
    counter += 1;
  }

  // console.log(myName); // would raise an error (myName not in scope)
  console.log(counter);   // => 3
}

greet();                  // => Julian (3 times)
// console.log(myName);   // would raise an error (not in scope)
// console.log(counter);  // would raise an error (not in scope)