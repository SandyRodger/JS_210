function hello() {
  a = 'hi'; // it's global because we don't declare it with a keyword. a is available everywhere, although it is not a property of the global object.
}

hello();
console.log(a); // 