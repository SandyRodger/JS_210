function foo() {
  if (false) {
    var a = 1;
  }
  var b = 2
  console.log(a); // undefined
  console.log(b); // 2
  console.log(c); // ReferenceError
}

foo();