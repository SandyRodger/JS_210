let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a); // => hello (because `let` is block scoped)