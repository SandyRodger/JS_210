let foo = 1;        // declared scope is block scope & visibility scope is global
var bar = 2;        // declared scope is function scope & visibility scope is global

if (true) {
  let foo = 3;      // declared scope is block scope & visibility scope is local (block)
  var qux = 4;      // declared scope is function scope & visibility scope is global
}

function bar() {    // declared scope is function scope & visibility scope is global
  let foo = 5;      // declared scope is block scope & visibility scope is local (function)
  var bar = 6;      // declared scope is function scope & visibility scope is local (function)

  if (true) {
    let foo = 7;    // declared scope is block scope & visibility scope is local (block)
    var qux = 8;    // declared scope is function scope & visibility scope is local (function)
  }
}