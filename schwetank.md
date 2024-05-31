# 31/5/24

## [study guide](https://launchschool.com/lessons/56ad2094/assignments/2ec8fa4d)

### assignments and comparison

- implicitly converts one to a the same type.  "implicit type coercion". This is quite unpredictable, so it's recommended to avoid this. 
- `let y = 1` this is declaration AND assignment
- assignment will always return a boolean.

### variable scope, especially how variables interact with function definitions and blocks

- In the example below x is not declared, mererly assigned.

```
function foo() {
  x = 2;
  console.log(x);
}

// console.log(x); // 1
foo(); // 2
console.log(x); // 2
```

- The assignment will assume strict mode is not running. 

### function scope

- versus block scope

### hoisting

- Talk about the TDZ (the error messages will differ). Make sure you have an example and a spiel for this.

```
console.log(x);

let x = 1;
```

### primitive values, types and type conversions/coercions

- float is not a primitive value. JS only has Numbers

- Float, String, Boolean, Null, Undefined



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
```

- 

### understand the differences between loose and strict equality
### how passing an argument into a function may or may not permanently change the value that a variable contains or points to

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

// IN RUBY, WE DO
```

### working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.
### understand that arrays are objects, and be able to determine whether you have an Array
### variables as pointers
### console.log vs return


### truthiness: false and true vs. falsy and truthy
### function definition and function invocation
### function declarations, function expressions, and arrow functions
### implicit return value of function invocations
### first-class functions

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

- functions are just like other values, they cna have their assignment passed to a function argument
- This will be on the assessment - key concept. Know what you're going to say about it.

### partial function application
### side effects



### naming conventions (legal vs idiomatic)
### pure functions and side effects
### strict mode vs. sloppy mode
### JavaScript syntactic sugar

## Other points:

- method is something called on an object, unlike function (?)
- Do you have anything resembling a mock-exam?

## chat

- expression v statement
- expression: any piece of that evaluates to a value.
- Statement : any code that instructs a program to do something, but does not have a value. Such as `let y = (let x = 1);` or and `if` statement or `switch` or `let` or `return` without an argument.
