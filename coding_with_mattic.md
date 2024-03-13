## Study topics:

- assignments and comparison
- variable scope, especially how variables interact with function definitions and blocks
- function scope
- hoisting
- primitive values, types and type conversions/coercions
- object properties and mutation
- understand the differences between loose and strict equality
- how passing an argument into a function may or may not permanently change the value that a variable contains or points to
- working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.
- understand that arrays are objects, and be able to determine whether you have an Array
- variables as pointers
- console.log vs return
- truthiness: false and true vs. falsy and truthy
- function definition and function invocation
- function declarations, function expressions, and arrow functions
- implicit return value of function invocations
- first-class functions
- partial function application
- side effects
- naming conventions (legal vs idiomatic)
- pure functions and side effects
- strict mode vs. sloppy mode
- JavaScript syntactic sugar

10/3/24:

- Partial function application
- RunJS : Stand-alone app. Paste the JS code in and it shows you the result.
- Difference between an object and its literal.
  - literals are a way of working with cvalues in JS
  - The other, more complete way, is creating an object of that class:
    - `let strObject = new String("world");`
    - console.log(typeof strObject); => `object` (so, Strings are of type object)
  - But str2 is a String !?:

```
let str = "hello";

console.log(typeof str);

let strObject = new String("world");

console.log(typeof strObject);

let str2 = strObject + str;

console.log(str2);

console.log(typeof str2);
```

- Strings are never mutable in JS - this is a key difference from Ruby.
- Primitives can never be changed (?)
- Strings in JS behave like ints in Ruby:

```
console.log("hello" === "hello");

console.log([1, 2] === [1, 2]);
```

- methods are distinct from functions in JS:
- ie. "arrow" functions (recent introduction) (you needn't be explicit forthe return): 

```
function p(el => console.log(el));
```

- FUNCTIONS ARE OBJECTS?!
- Objects are hashes?

- `map` is not destructive.
- If we aren't explicit about returns then whatever happens in the body of the function is not relevant ( in what sense?)
- One line v multi-line syntax rules.


### Coercion

- A common mistake is to forget that your numbers are actually strings.

```
let arr = [1, 2, 3];

console.log(arr['0']);
```


13.3.24

- Falsey values
- `===` v `==` and implicit conversion (it's a whole thing in JS)
- Some people still use the `==`, but LS would have you use `===`.
- Also `>` doesn't have a strict version, for example. 
- coderpad: strict mode (won't run, if code contains mistakes, which JS would normally just run. This prevents common bugs)

```
/* truthiness: false and true vs. falsy and truthy

Falsy values:

undefined
NaN
false
0
''
null

*/

// let a = undefined;

// if (a) console.log('truthy');

// console.log(null === null);

// console.log(!!a);


let str = 'hello';

let arr = [];

for (let i = 0; i < str.length; i += 1) {
  arr[i] = str[i];
}

console.log(arr);
```
