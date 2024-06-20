# 31/5/24

- JS is a multi-platform language, so browser-based (prolly chrome)  and node-based mozilla firefox

## [study guide](https://launchschool.com/lessons/56ad2094/assignments/2ec8fa4d)

### assignments and comparison

- implicitly converts one operand's type to match the other so they're the same type.
- "implicit type coercion" is quite unpredictable, so it's recommended to avoid it. 
- `let y = 1` this is declaration AND assignment
- comparison will always return a boolean.

### variable scope, especially how variables interact with function definitions and blocks

- In the example below x is not declared, merely assigned.

```
function foo() {
  x = 2;
  console.log(x);
}

// console.log(x); // 1
foo(); // 2
console.log(x); // 2
```

- The assessment will assume strict mode is not running. 

### function scope

- versus block scope

### hoisting

- Talk about the TDZ (one indication of this is that the error messages will differ). Make sure you have an example and a spiel for this.
- `var` varibales are implicitly assigned to undefined.
- This mostly means vars being taken to the top of their functions. Though it can also apply to global scopes. 

```
console.log(x);

let x = 1;
```

### primitive values, types and type conversions/coercions

- float is not a primitive value. JS only has Numbers

- Number, String, Boolean, Null, Undefined

### object properties and mutation

- Mutating the object:

```
let a = {
  apple: 1,
  orange: 2,
}

let b = a;

console.log(a === b); // true
console.log(a);

a.apple = 3;

console.log(a === b); // true
console.log(a);
```

- "static method" v "instance method" ?
- Under the hood JS creates an object, calls a method on it and then deletes the object, even though it is a primitive (relevant for assessment? no). We cannot (should be) invoke methods on primitive.

```

### understand the differences between loose and strict equality
### how passing an argument into a function may or may not permanently change the value that a variable contains or points to.

```
function foo(x) {
  x = x + 1;
  console.log(x);
}

let y = 1;
foo(y);
console.log(y);


// BIG DIFFERENCE RUBY AND JS

// IN JS, WE DO NOT PASS VARIABLES
// INSTEAD WE PASS VALUES

// IN RUBY, WE DO PASS VARIABLES
```

### working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.
### understand that arrays are objects, and be able to determine whether you have an Array
### variables as pointers:

- In Ruby we pass

### console.log vs return


### truthiness: false and true vs. falsy and truthy
### function definition and function invocation
### function declarations, function expressions, and arrow functions
### implicit return value of function invocations
### first-class functions

- Functions are first-class objects

```
function foo(x) {
  console.log('foo called')
  x()
}

function x() {
  console.log('x called')
}

foo(x);
```

- functions are just like other values, they can have their assignment passed to a function argument
- This will be on the assessment - key concept. Know what you're going to say about it.

- An example:

```
function foo(x) {
  x();
}

function y() {
  console.log('called y');
}

foo(y);
```
### partial function application

```
// Primary
const add = function(x, y) {
  return x + y;
}

// Generator
const makeAdder = function(x) {
  return function(y) {
    return add(x, y)
  }
}

// Application
const add5 = makeAdder(5);

console.log(add5(1));
console.log(add5(2));
```

- We have a function which returns a function. The returned function calls the primary function with less arguments than it otherwise takes.
- PGA is in the next course.

### Closures:

- ONLY FOR FUNCTIONS.
- In the following example `x` is not deleted after the running of the anonymous function (as it would be in some languages)
- The concept of closure allows a function to access the variables which were present when the function was defined, even though that varibale is out of scope where the function is invoked.
- This is a lexical concept, rather than a runtime concept, but this is covered at the `this` topic later.
- In JS every function has access to `this`.

```
function foo() {
  let x = 0;

  return function() {
    x += 1;
    return x;
  };
}

let x1 = foo();

console.log(x1());
console.log(x1());


let x2 = foo();
console.log(x2());
```

- Closure only takes they variables that would be required by the function:

```
function foo() {
  let x = 0;
  let y = 'y';
  console.log(y);

  return function() {
    x += 1;
    return x;
  };
}

let x1 = foo();

console.log(x1());
console.log(x1());


// let x2 = foo();
// console.log(x2());
```

### side effects



### naming conventions (legal vs idiomatic)
### pure functions and side effects

- like mathematical functions. It cannot be changed or corrupted.

### strict mode vs. sloppy mode
### JavaScript syntactic sugar

## Other points:

- method is something called on an object, unlike function (?)
- Do you have anything resembling a mock-exam?

## chat

- expression v statement
- expression: any piece of code that evaluates to a value.
- Statement : any code that instructs a program to do something, but does not have a value. Such as `let y = (x = 1);` or and `if` statement or `switch` or `let` or `return` without an argument.
