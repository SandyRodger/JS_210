function foo() {
  if (true) {
    function bar() {
      console.log("bar"); // [Function: bar]
    }
  } else {
    function qux() {
      console.log("qux"); // bar
    }
  }

  console.log(bar); // undefined
  bar();

  console.log(qux); // TypeError: qux is not a function
  qux();
}

foo();