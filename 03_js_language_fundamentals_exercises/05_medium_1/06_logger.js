function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// we call the deBugIt function on line 10
// initialize the `status` variable on line 2, with a block scope
// `status` is accessible on line 4 because the logger() function, when declared has access to the variables in its outer scope, due to lexical scoping rules.