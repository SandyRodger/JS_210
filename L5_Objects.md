# Objects

## [1	Introduction to Objects](https://launchschool.com/lessons/79b41804/assignments/091246c3)

- JS is object oriented: "the code in a JS program uses objects to organize code and data"
- Typically data-values and the functions that operate upon them are part of the same object.

### Standard Built-in Objects

- JS provides built-in objects like:
  - `String`
  - `Array`
  - `Object`
  - `Math`
  - `Date`
- Note that some built-in objects have the same name (homonymous) as Primitive data-types.
  - for example `String`. As a primitive value we can't call methods on them. However, JS temporarily coerces primitives into object versions when necessary, so it doesn't affect us.
  - The subtle distinction is illustrated below:

```
let a = 'hi';                        // Create a primitive string with value "hi"
typeof a;                            // "string"; This is a primitive string value

let stringObject = new String('hi'); // Create a string object
typeof stringObject;                 // "object"; This is a String object

a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"

typeof a;                            // "string"; The coercion is only temporary
typeof stringObject;                 // "object"
```

- This holds true for all other primitives except `null` and `undefined.

### Creating Custom Objects

- You can create objects weiht the following 'object literal' notation:
  - (The alternative to literal syntax is using a constructor function, like `new Object('john', 30, 'male')`

```
let colors = {
  red: '#f00',
  orange: '#ff0',
};

typeof colors;      // "object"
colors.red;         // "#f00"
colors.orange;      // "#ff0"
```

### Properties

- Objects are containers for 2 things:
  - Data:
    - named items with values
      - the values are the object's attributes
  - Behaviour
- In JS, these Key and Value associations are called 'properties;.
- You can read and reassign the property by writing `object-name` + `.` + `key`

### Methods

- These are actually properties, which is why we access them with the same syntax:

```javascript
(5.234).toString();       // "5.234"
'pizza'.match(/z/);       // [ "z", index: 2, input: "pizza" ]
Math.ceil(8.675309);      // 9
Date.now();               // 1467918983610
```

- Define custom objects with trailing commas:

```javascript
let myObj = {
  prop1: 'sample data',
  prop2: 'sample data',
  method1: function () {},
};
```

#### Compact Method Notation

- Since ES6 you can forgo the `function` word when writing methods:

```javascript
let myObj = {
  foo(who) {
    console.log(`hello ${who}`);
  },

  bar(x, y) {
    return x + y;
  },
};
```

- You can define methods with arrow functions, but it's a bad idea.

### Capitalization

- Don't stress too much, but here are the differences.
  - Lowercase for:
    - talking about the primitive type.
    - object as objects in general
  - Uppercase for:
    - The object form of a primitive type.
    - Object when talking about methods and properties from the `Object` class.
    - Referring to functions and prototypes of "prototype objects". ie `new Date()`.

## [2	Object Properties](https://launchschool.com/lessons/79b41804/assignments/5564f6e8)

### Property Names and Values

- Property names are strings, values are any expression.

```
let object = {
  a: 1,                           // a is a string with quotes omitted
  'foo': 2 + 1,                   // property name with quotes
  'two words': 'this works too',  // a two word string
  true: true,                     // property name is implicitly converted to string "true"
  b: {                            // object as property value
    name: 'Jane',
    gender: 'female',
  },
  c: function () {                // function expression as property value
    return 2;
  },
  d() {                           // compact method syntax
    return 4;
  }
};
```

### Accessing Property Values

- dot notation or bracket notation. Style-guides recommend dot.

```javascript
let object = {
  a: 'hello',
  b: 'world',
};

object.a;                 // "hello", dot notation
object['b'];              // "world", bracket notation
object.c;                 // undefined when property is not defined

let foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {        // function expression as property value
    return 2;
  },
  d() {                   // compact method syntax
    return 4;
  }
};

foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd'];         // true, bracket notation can take expressions
let a = 'a';
foo[a];                   // 1, bracket notation works with variables since they are expressions
foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
foo.c();                  // 2, Call the method 'c'
foo.d();                  // 4, Call the method 'd'
```

### Adding and Updating Properties

- As you would expect:

```
let object = {};              // empty object

object.a = 'foo';
object.a;                     // "foo"

object['a name'] = 'hello';
object['a name'];             // "hello"

object;                       // { a: "foo", "a name": "hello" }
```

- delete with reserved keyword `delete`:

```javascript
let foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;                      // { b: "world" }
```

## [3	Stepping through Object Properties](https://launchschool.com/lessons/79b41804/assignments/b88f5906)

- We usually iterate through objects with `for... in` loops:

```javascript
let nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (let nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs on the console:
joseph
Joey
margaret
Maggie
```

### Further Reading

- 4 ways to iterate through an array:

```
var prices = [400, 80, 375, 870];

// 1
for (var i = 0; i < prices.length; i += 1) {
  console.log(prices[i]);
}
  // logs 400, 80, 375, 870

// 2
for (var k in prices) {
  console.log(prices[k]);
}
  // logs 400, 80, 375, 870
  
// 3
for (var v of prices) {
  console.log(v);
}
  // logs 400, 80, 375, 870
  
// 4
prices.forEach(function(val) {
  console.log(val);
});
  // logs 400, 80, 375, 870
```

- And 2 ways for an object:

```

var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

// 1
var productKeys = Object.keys(products);
for (var i = 0; i < productKeys.length; i += 1) {
  var key = productKeys[i];
  console.log(key + " : " + products[key]);
}
  // logs "widget : 400", "gear : 80", "crank : 375", "lever : 870"
  
// 2
for (var product in products) {
  console.log(product + " : " + products[product]);
}
  // logs "widget : 400", "gear : 80", "crank : 375", "lever : 870"
```

- "enumerability" article by [Severin Perez](https://medium.com/launch-school/javascript-weekly-an-introduction-to-iteration-and-enumerability-70bb1054064a)

```

var prices = [400, 80, 375, 870];

var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

var pricesDescriptors = Object.getOwnPropertyDescriptors(prices);
console.log(pricesDescriptors);
  // logs:
  // { 0: {value: 400, writable: true, enumerable: true, configurable: true},
  //   1: {value: 80, writable: true, enumerable: true, configurable: true},
  //   2: {value: 375, writable: true, enumerable: true, configurable: true},
  //   3: {value: 870, writable: true, enumerable: true, configurable: true},
  //   length: {value: 4, writable: true, enumerable: false, configurable: false} }

var productsDescriptors = Object.getOwnPropertyDescriptors(products);
console.log(productsDescriptors);
  // logs:
  // { crank: {value: 375, writable: true, enumerable: true, configurable: true},
  //   gear: {value: 80, writable: true, enumerable: true, configurable: true},
  //   lever: {value: 870, writable: true, enumerable: true, configurable: true},
  //   crank: {value: 375, writable: true, enumerable: true, configurable: true} }
```

## [4	Practice Problems: Working with Object Properties](https://launchschool.com/lessons/79b41804/assignments/3793abca)

1. tick
2. tick
3. tick
4. tick

## [5	Arrays and Objects](https://launchschool.com/lessons/79b41804/assignments/5dc08268)

- Use an array if it's a list with many items aand you care about their order
- Object for entities with many parts (?). "Keyed access". "associative array".

### Arrays are Objects

```javascript
let a = ['hello', 'world'];

console.log(typeof a);        // "object"
console.log(a['1']);          // "world", object's bracket notation to access value
console.log(Object.keys(a));  // ["0", "1"], the keys of the object!

// line 1 is equivalent of:

let a = {
  '0': 'hello',
  '1': 'world',
};

console.log(typeof a);        // "object"
console.log(a['1']);          // "world", object's bracket notation to access value
console.log(Object.keys(a));  // ["0", "1"], the keys of the object!
```

### Arrays and the Length Property

- You can seemingly hide things in Arrays as not elements, but properties.

```javascipt
let myArray = [];
myArray["foo"] = "bar";
myArray[0] = "baz";
myArray[1] = "qux";

console.log(myArray); // logs ['baz', 'qux', foo: 'bar']
myArray.length; // returns 2 since foo: 'bar' is not an element
myArray.indexOf("bar"); // returns -1 since 'bar' isn't in an element

myArray[-1] = "hello";
myArray[-2] = "world";
myArray.length; // returns 2
myArray.indexOf("hello"); // returns -1 since 'hello' is not in an element
// the fact that myArray[-1] is 'hello' is
// coincidental
myArray.indexOf("world"); // returns -1 since 'world' is not in an element

console.log(myArray); // logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length; // returns 5 (there are 5 keys at this point)
myArray.length; // returns 2 (but only 2 keys are indexes)
```

### Using Object Operations with Arrays

#### in

- don't use it with arrays, like this:

```
0 in [];      // false
0 in [1];     // true
```

- Do this instead:

```
let numbers = [4, 8, 1, 3];
2 < numbers.length;          // true
```

- use `splice` instead of `delete` for arrays.
- comparison operators are confusing with objects, so avoid them, unless you want to know if they are the same object.

## [6	Arrays: What is an Element?](https://launchschool.com/lessons/79b41804/assignments/153a803b)

### Array Keys

```
let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr)); // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]
```

- Arr is empty and not empty:

```
let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length);       // 0                Yes
console.log(Object.keys(arr)); // [ '-3', 'foo' ]  No
```
### Sparse Arrays

- Elements can be not defined or undefined.

## [7	Mutability of Values and Objects](https://launchschool.com/lessons/79b41804/assignments/40b5852e)

- "garbage collected"

### Review: Nested Data Structures

- Shallow copy v deep copy.
- Es6 "spread syntax":

```
let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];
copyOfArr; // => [ 'a', 'b', 'c' ];
```

- Creating a copy with spread syntax and slice both create a shallow copy, meaning nested compound objects are shared, rather than copied:

```
let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

arr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
```

### shallow copying with assign

```
let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
obj1; // => { a: 'foo', b: 'bar' }
```

- Create a shallow copy by passing in an empty object as the first argument:

```
let obj = { a: 'foo', b: 'bar' };
let copyOfObj = Object.assign({}, obj);

copyOfObj; // => { a: 'foo', b: 'bar' }
```

### deep copying

- Doesn't work with more complex objects, like dates or custom objects or objects with methods in them.

```
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
```

## [8	Pure Functions and Side Effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5)

### Side effects

- A function can be said to have a side-effect if it:
  - reassigns any non-local variable.
  - mutates the value of any object referenced by a non-local variable.
  - reads from/writes to any data entity that is non-local to your program.
  - raises an exception
  - calls another function that has side-effects.
- Everyone says functions have side effects, but it's more precise to say function **calls** have side-effects. This is because the function may have side-effects when passed certain arguments, that it otherwise would not. Or raise exceptions in some contexts only.
- Having said that, in most cases functions that have side-effects have them consistently, regardless of their arguments.
- Functions that have unexpected side-effects are a major source of bugs.

#### Side effects Through reassignment:

```javascript
let number = 42;
function incrementNumber() {
  number += 1; // side effect: number is defined in outer scope
}
```

#### Side effects through mutation

```
let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop(); // side effect: alters the array referenced by letters
}
```

#### Side effects through input/output

- any of the following (and many more similar items), are considered side-effects:
  - reading from:
    -  a file on the system's disk
    -  input from the keyboard
    -  data from a form on a web-page
  -  writing to
    -  a file on the system's disk
    -  the console
  -  Accessing
    -  a database
    -  System-hardware, such as:
      - the mouse/trackpad/pointing device
      - The clock
      - Random number generator
      - audio-speakers
      - camera
  -  Sending data to a remote web-site
  -  Receiving data from a remote web-site

- In short, anything that causes Javascript to look outside the program for a place to read or send data is a side-efect.

```
// This code may not work in a browser; use Node instead.
let readLine = require("readline-sync");

function getName() {
  let name = readLine.question("Enter your name: "); // side effect: output and input
  console.log(`Hello, ${name}!`); // side effect: output to console
}
```

```
let date = new Date(); // side effect: accesses the system clock
let rand = Math.random(); // side effect: accessed random number generator
```

#### Side effects through exceptions:

- If a function raises an exception that it does not catch/handle, it's a side-effect.

```
function divideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Divide by zero!"); // side effect: raises an exception
  }

  return numerator / denominator;
}
```

#### Side effects through other functions:

- When a function calls another function that has a side-effect:
  - `console.log()`
  - `readline.question`
  - `new Date()` because it accesses the system clock.
  - `Math.random()` because it accesses the random number generator.
- ... because, the function propagates its side-effect to the calling function. If the effect is local to that function, it doesn't count.

### Mixing Side Effects and Return Values

- Don't.
- Either a function should have a useful return value, or a side-effect, not both. Such a function would be confusing and difficult to keep track of.
- The exception to this is reading data from places which must then be returned somewhere. 

### Pure Functions

- Functions that:
  - have no side-effect
  - given the same arguments, always returns the same value.

```
const square = value => value * value;
```

- Nothing else can influence the function during that function's lifetime.
- A function's lifetime begins when the function is created. It ends when the function is destroyed.
  - Functions inside other functions (nested functions) exist only while the outer function is being called. The are created when the outer function is called.
- We like pure functions because they are easy to test.
- Functional programming is a programming paradigm that relies heavily on pure functions. It is characterised by:
  - pure functions
  - declarative code
  - no mutations

### Practice Problems

1. `arr.pop` and `console.log()`

```javascript
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);
```

2.

```
function sum(a, b) {
  a + b;
}
```
- : pure because even though the implicit return is `undefined`, that is a consistent return value.

```
function sum(a, b) {
  return a + b;
}
```

- obviously pure

```
function sum(a, b) {
  return 3.1415;
}
```
- : pure because no side-effects and return value consistent.

## [9	Working with the Math Object](https://launchschool.com/lessons/79b41804/assignments/00b61bb2)

### radians

  - Radian: The angle made when the radius is wrapped around the circle.
  - 1 radian = 56.2958... degress
  - In a half circle there are pi radians
  - To go from radians to degrees multiply by 180, divide by pi
- To go from degrees to radians multiply by pi, divide by 180

1.

```javascript
function convertRadiansToDegrees(r) {
  return (r * 180)/Math.PI
}
```

2.

```
let logPositive = num => Math.abs(num)
```

3.

```
let n = 16777216;
console.log(Math.sqrt(n))
```

4. `console.log(Math.pow(16, 6)); // 16777216`

5.

```
let a = 50.72;
let b = 49.2;
let c = 49.86;

// a = 50

console.log(Math.floor(a));

// b = 50

console.log(Math.ceil(b));

// c = 50

console.log(Math.round(c));
```

6.

```
function inclusiveRand(n1, n2) {
  output =  Math.random() * (n1 - n2 + 1) + n2;
  return Math.floor(output)
}

console.log(inclusiveRand(1, 10));
console.log(inclusiveRand(100, 10));
```

## [10	Working with Dates](https://launchschool.com/lessons/79b41804/assignments/a2584ce1)

- tick

## [11	Working with Function Arguments](https://launchschool.com/lessons/79b41804/assignments/55096c15)

### The Traditional Approach

- `arguments`
- Create an array from `arguments` like this: `let args = Array.prototype.slice.call(arguments);`
- It is an inherent weakness of `arguments` that it is ambiguous how many arguments are expected and what the function does.

### The Modern Approach

- `...args` AKA rest parameters. This one is actually an array.

## [12	Practice Problem: Welcome Stranger](https://launchschool.com/lessons/79b41804/assignments/0253c010)

- 

## [13	Practice Problem: Repeated Characters](https://launchschool.com/lessons/79b41804/assignments/3e1e13df)

## [14	More Exercises](https://launchschool.com/lessons/79b41804/assignments/0bc5138c)

- JS basics (last 4)
- Medium 1
- Medium 2
- Easy 3
- Easy 4
- Easy 5
## [15	Quiz](https://launchschool.com/lessons/79b41804/assignments/dbf1b1a1)
