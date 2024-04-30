function hello() {
  a = 'hello';
  console.log(a); // => hello

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a); // => RefError