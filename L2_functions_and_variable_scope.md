# [Functions and Variable Scope](https://launchschool.com/lessons/7cd4abf4/assignments)

## [1	Defining Functions](https://launchschool.com/lessons/7cd4abf4/assignments/067955f4)

- "Procedures":
  - In Ruby it's methods
  - In JS it's functions

### Parameters v arguments

- I know all this.

## [2	Function Invocations and Arguments](https://launchschool.com/lessons/7cd4abf4/assignments/7c802de8)

- Invoke a function by appending `()` to its name:

```
function startle() {
  console.log('Yikes!');
}

startle // no output
startle() // yikes
```

- We can save functions to other vars:

```
let surprise = startle;
surprise();

// logs:
Yikes!
```

- Calling a function with too few arguments does not raise an error.
- The var without input will be `undefined`
- Surplus arguments will be ignored.

```
function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b); // num + undefined = NaN
}

takeTwo(1, 2); // 1 2 3
takeTwo(1); // 1 undefined NaN
takeTwo(1, 2, 4); // 1 2 3
```

## [3	Practice Problems: Functions]()

1.

```
function average(a, b, c) {
  return (a + b + c)/3
}

console.log(average(3, 3, 3)); // => 3
console.log(average(45, 300, 1)); // => 115.33333333
```

2.

```
function sum(a, b, c) {
  return (a + b + c)
}

function average(a, b, c) {
  return sum(a,b,c)/3
}

console.log(average(3, 3, 3)); // => 3
console.log(average(45, 300, 1)); // 115.333333333
```

3.

```
function arrayAverages(arr) {
  let length = arr.length;
  let total = 0;
  for (let index = 0; index < length; index++) {
    total += arr[index]
  } 
  return total/length;
}

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

console.log(arrayAverages([3, 3, 3])); // => 3
console.log(arrayAverages([45, 300, 1])); // 115.333333333
```

4.

```
function arraySum(arr) {
  let length = arr.length;
  let total = 0;
  for (let index = 0; index < length; index++) {
    total += arr[index]
  } 
  return total;
}

function average(arr) {
  return arraySum(arr)/arr.length;
}

console.log(average([3, 3, 3])); // => 3
console.log(average([45, 300, 1])); // 115.33333333333333
console.log(average([2, 3, 4, 5, 6, 7, 8])); // 8
```

5.

```
let temperatures = [36, 37, 38, 42, 100]

function arraySum(arr) {
  let length = arr.length;
  let total = 0;
  for (let index = 0; index < length; index++) {
    total += arr[index]
  } 
  return total;
}

function average(arr) {
  return arraySum(arr)/arr.length;
}

console.log(average(temperatures)); // 50.6
```

## [4	Nested Functions]()

```
function circumference(radius) {
  function double(number) {      // nested function declaration
    return 2 * number;
  }

  return 3.14 * double(radius);  // call the nested function
}
```

## [5	Functional Scopes and Lexical Scoping]()

- A variable's scope is the part of the program that can access that variable by name.
- Every function or block creates a new variable scope.

### The Global Scope

- For very small JS programs

### Function Scope

- Unlike Ruby, objects don't have to be passed into a function if they are declared on the global scope:

```
let name = 'Julian';

function greet() {
  function say() {
    console.log(name);
  }

  say();
}

greet(); // Julian
```

### Block Scope

- I know this. It's the houses with the one way mirror walls.
```
let name = 'Julian';       // `name` is in global scope

function greet() {         // `greet` is also in global scope
  let counter = 0;         // `counter` is in function scope
  while (counter < 3) {
    let myName = name;     // `myName` is in block scope
    console.log(myName);
    counter += 1;
  }

  // console.log(myName); // would raise an error (myName not in scope)
  console.log(counter);   // => 3
}

greet();                  // => Julian (3 times)
// console.log(myName);   // would raise an error (not in scope)
// console.log(counter);  // would raise an error (not in scope)
```

### Lexical Scoping

- The source code defines the scope. That means, where the code is written determines its scope - even if it is never executed and even if the function contains no variables - it still creates its own scope.
- At any point in the program there is a heirarchy of scopes from the local scope up to the program's global scope. (Like concentric circles?)
- When JS searches through this heirarchy, it stops and returns the first matching variable it finds. This means that variables in a lower scope can shadow or hide variables in a higher scope.

### Adding Variables to the Current Scope

- `let` or `const`
- `var`
- Parameters for a function
- function declaration
- Class declaration

```
function lunch() {    // A function declaration creates a new variable scope
  let food = 'taco';  // 1. Add a new variable food within the current variable scope
}

function eat(food) {  // 2. Parameters create variables during function invocation
  console.log('I am eating ' + food);
}

function drink() {    // 3. Add a new variable drink within the global variable scope
  console.log('I am drinking a glass of water');
}
```

### Variable Assignment

```
let country = 'Spain';
function update() {
  country = 'Liechtenstein';
}

console.log(country);  // logs: Spain

update();
console.log(country);  // logs: Liechtenstein
```

- If JS can't find the var IT CREATES A GLOBAL VAR OF THAT NAME!!!!

```
// no other code above
function assign() {
  let country1 = 'Liechtenstein';
  country2 = 'Spain';
}

assign();
console.log(country2);   // logs: Spain
console.log(country1);   // gets ReferenceError
// no other code below
```

- The subtle differences of vars being assigned values without being declared with `var` or `const` or `let` are important, but covered later.

### Variable Shadowing

```
let name = 'Julian';

function greet() {
  let name = 'Logan';
  console.log(name);
}
```

- REMEMBER: The code doesn't have to be run for the scope to exist.
- All variables in the same or surrounding scopes are visible to each other, but not seperate functions/scopes:

```
function first() {
  let gary = 1;
}

function second () {
  console.log(gary);
}

second() // Error: gary is not defined
```

## [6	Function Declarations and Function Expressions]()

### Function Declarations

- A function declaration defines a variable with the type `function`
- Function declarations not only create a function, but also a variable.

```
let stringVar = 'string value';
let numberVar = 42;                  // number value

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar);       // string
console.log(typeof numberVar);       // number
console.log(typeof functionVar);     // function

// Reassignment works as expected:
stringVar   = functionVar;           // `stringVar` now references a function
functionVar = 'string value';        // `functionVar` now contains a string

console.log(typeof stringVar);       // function
console.log(typeof functionVar);     // string
```

### Function Expressions

- Defines a function as part of a larger expression syntax (usually assignment)

```
const hello = function () {   // We can also use let instead of const
  return 'hello';
};

console.log(typeof hello);    // function
console.log(hello());         // hello
```

- And in the following we work with anonymous functions. Some devs would call it `foo` but it's more precise to say the anonymous function assigned to `foo`.

```
let foo = function () {
  return function () {   // function expression as return value
    return 1;
  };
};

let bar = foo();         // bar is assigned to the returned function

bar();                   // 1
```

### Named Function Expressions

- We can name function expressions like this:

```
let hello = function foo() {
  console.log(typeof foo);   // function
};

hello();

foo();                       // Uncaught ReferenceError: foo is not defined
```

- but the function is scoped within the function's local scope.
- Be aware that named function expressions can look very similar to function declarations. One can differentiate them by seeing if the statement begins with `function`, in which case it is a declaration, otherwise it is an expression.
- In the following code the minor change of adding brackets makes the statement an expression:

```
function foo() {
  console.log('function declaration');
}

(function bar() {
  console.log('function expression');
});

foo();    // function declaration
bar();    // Uncaught ReferenceError: bar is not defined
```

- Functions defined using function declaration, must always have a name.
- In doing so the declaration creates both a function and variable with the same name. The following 2 examples both create a function and a variable of the same name:

```
let foo = function foo() {
  return 'a named function expression assigned to a variable';
};

function bar() {
  return 'a function declaration';
}
```

### Arrow Functions

- An ES6 introduction. They're just a shorthand.

```
const multiply = function(a, b) {
  return a * b;
};

const arrowMultiply = (a, b) => {
  return a * b;
};

console.log(arrowMultiply(2, 6)); // 12
```

- The following should work for me, but is throwing an error because of the `retrurn`:
  - `const multiply = (a, b) => return a * b;`
- And this is the shortest version and does work : `const multiply = (a, b) => a * b;`
- We use arrow functions most often as callbacks (ie methods that are passed as arguments into other functions).

```
[1, 2, 3].map(element => 2 * element); // returns [2, 4, 6]
```

- A key point is that they inherit the "execution context". More on that later.

### Style notes

- We''l be pretty willy-nilly about arrow functions/function declarations and function expressions. In real life one might want to be more purposeful.
- Here are some general rules:
  - Arrow functions for callbacks
  - Function declarations for other functions
  - Function expressions are better named, for debugging purposes and readability.

## [7	Hoisting](https://launchschool.com/lessons/7cd4abf4/assignments/510e62bb)

- We've only have `let` and `const` since 2015.
- `var` has hoisting.

### What to focus on

- `var` and hoisting are less relevant than they once were, but they are still prevalent.
- You should be able to answer these questions:
  - What is hoisting?
  - How do `var`, `let` and `const` interact with hoisting? How do they differ?
  - How do functions and classes interact with hoisting? How do they differ?
  - What part does hosting play in the way a specific program works?
  - How does hoisting really work?

### The `var` statement

- ...

#### How do `var` and `let` differ?

1. `var` is added as a property to the global scope (unlike `let`)

```
var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar); // 43

let foo = 86;
console.log(global.foo); // undefined
```

- This example above demonstrates that using `var` at the top level of a program creates a property on the global object. `let` does not. So `let` is safer.
- If `var` is declared within a function, it is scoped within the function and therefore not as a property of the global object.
- The example above only works in the Node REPL rather than in a javascript file because when you run a js file with node, Node wraps it in the following function:

```
(function (exports, require, module, __filename, __dirname) {
  // your code is here
});
```

2. `var` is function scoped, while `let` is block scoped.

```
function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}

foo();
```

- Rememeber: not everything between curly braces is a block.

3. In JS the variable `a` on line 3 is created even if the code isn't run, but it is not assigned:

```
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
```

#### Declared Scope vs Visibility Scope

- nominal v practical ? Professed v actual ? 
- At the top level of a program "function scope" refers to the entire program. AKA "global scope". One could more acurately call this "module scope" or "file scope", but no one does.
- To be precise: there are no declarations that explicitly create a variable in the global scope. All declarations have either "block scope"(`let`, `const` and `class`) or "function scope" (`var`, `function`).
- In the following example, `foo` is declared with `let` and therefore has block scope. But it's on the top level, so it has global scope. Both are true, because they are the same scope in this example.

```
let foo = 1;
console.log(foo);
```

- It helps to think of scope as having two seperate, but related definitions: 'declared scope' and 'visibility scope'.

##### Declared scope:

- How a variable is declared. Is it with:
  - `let` (block scope)
  - `const` (block scope)
  - `class` (block scope)
  - `var` (function scope)
  - `function` (function scope)
- So in the following example all the `var`s have function scope and all the `let`s have block scope even though they are defined in the same contexts.

```
let foo = 1;        // declared scope is block scope
var bar = 2;        // declared scope is function scope

if (true) {
  let foo = 3;      // declared scope is block scope
  var qux = 4;      // declared scope is function scope
}

function bar() {    // declared scope is function scope
  let foo = 5;      // declared scope is block scope
  var bar = 6;      // declared scope is function scope

  if (true) {
    let foo = 7;    // declared scope is block scope
    var qux = 8;    // declared scope is function scope
  }
}
```

- Usually we talk about "declared scope", when the scope is the result of a declaration.

##### Visibility scope

- Where the variable is visible. It can be:
  - global scope
  - local scope (in a function or block) AKA function scope or block scope.
- This is why we can talk about a variable declared with `let` having "function visibility", even though actually `let` always has block scope.
- Looking at the previous example (exactly the same) through this lense:

```
let foo = 1;        // visibility scope is global
var bar = 2;        // visibility scope is global

if (true) {
  let foo = 3;      // visibility scope is local (block)
  var qux = 4;      // visibility scope is global
}

function bar() {    // visibility scope is global
  let foo = 5;      // visibility scope is local (function)
  var bar = 6;      // visibility scope is local (function)

  if (true) {
    let foo = 7;    // visibility scope is local (block)
    var qux = 8;    // visibility scope is local (function)
  }
}
```

- When we're discussing scope, we usually mean visibility scope, (because it's only one that affects how the code runs?)

#### My comic idea

---------------------------------------------------------------------------------------------------------------
My comic is titled 'Varnika and Letitia play hide and seek with the whole world'
characters:
Varnika (represents variables declared with var)
Leticia (represents variables declared with let)
Fuschia the functioning Fin-whale (represents a function)
Everyone in the whole world (representing any object to which these objects might be visible)
(and maybe at some point Clarissa the Kaiju, representing class and Constantine representing const)
Part 1: (lines 1 - 2 in the code example)
let foo = 1;        // declared scope is block scope & visibility scope is global
var bar = 2;        // declared scope is function scope & visibility scope is global
Varnika and Letitia are in an open field
Varnika says: "Look at me, I'm hiding in a block"
Letitia says: "Look at me, I'm hiding in a function"
Everyone in the world says: "We can still see you!"
Part 2: (lines 4 - 7 in the code example)
if (true) {
  let foo = 3;      // declared scope is block scope & visibility scope is local (block)
  var qux = 4;      // declared scope is function scope & visibility scope is global
}
Varnika and Letitia are now hiding in a large box of some kind:
Varnika says: "Look at me, I'm hiding in a block"
Letitia says: "Look at me, I'm hiding in a function"
Everyone in the world says: "We can still see Varnika, but where did Letitia go ?"
Part 3: (lines 9  -11)
function bar() {    // declared scope is function scope & visibility scope is global
  let foo = 5;      // declared scope is block scope & visibility scope is local (function)
  var bar = 6;      // declared scope is function scope & visibility scope is local (function)
Letitia and Varnika have been swallowed by a giant fin-whale called Fuschia.
Varnika says: "Look at me, I'm hiding in a block"
Letitia says: "Look at me, I'm hiding in a function"
Fuscia says: "I want to play too, I'm hiding in a function"
Everyone in the world says: "We can see Fuschia, but where are Varnika and Letitia?"
Someone: “look in the whale!”
Everyone in the world says: "Ah there you are!”
Part 4: (lines 13 -16)
function bar() {
  if (true) {
    let foo = 7;    // declared scope is block scope & visibility scope is local (block)
    var qux = 8;    // declared scope is function scope & visibility scope is local (function)
  }
}
Letitia and Varnika are now hiding in a box they’ve found in the whale’s stomach
Varnika says: "Look at me, I'm hiding in a block"
Letitia says: "Look at me, I'm hiding in a function"
Everyone in the world says: "You always say that!"
Everyone in the world says: "Woah, where did they go?"
Someone: “look in the Whale!”
Everyone in the world says: "Here's Varnika, but where is Letitia?"
Someone: “She's in the box!”
Everyone in the world says: "Ah there you are!”
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ (edited) 

### What is Hoisting?

- Be aware of: creation phase and execution phase.
- Creation phase: initial prep work:
  - Finds all variable, function and class declarations.
  - Pulls these declarations to the top of their function or block (depending on their scoping).
- Execution phase: The program runs code line by line. (Not relevent in this explanation of hoisting).
- This is why you can call functions before they are declared in the program. Because they have been hoisted to the top of the program.

```
console.log(getName());

function getName() {
  return "Pete";
}
```

- So the code is effectively rearranged to the following:

```
console.log(getName());

function getName() {
  return "Pete";
}
```

- Hoisting does not change the program. It merely executes it as though it were different. Like eating desert before your main course (?)

### The temporal dead zone

- `let` `const` and `var` variables are also hoisted. With `var` it's different.
  - When `var` is hoisted, JS assigns it to `undefined`.
  - When `let` and `const` are hoisted they aren't set at all. (One could say they aren't defined, but that is confusing)

```
console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3

console.log(foo);
let foo; // ReferenceError : cannot access before initialization
console.log(qux);
const qux = 42 // Reference Error : cannot access before initialization
console.log(baz); // Reference Error : not defined
```

### Hoisting for Function Declarations

- Functions go to the top, and this also applies to nested functions which go to the top of the function body.
- Nested functions can hoist inconsistently. It depends on something called "strict mode" and some web extensions. Prior to ES6 behaviour was undefined.

```
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
```

- There are many possible outcomes for this code. For that reason you shouldn't nest functions inside non-function blocks (and if you must use a function inside a block, use a function expression)

### Hoisting for Function Expressions

- Function expressions often have functions saved to variables. So the variables follow variable-hoisting rules:
- This:

```
console.log(hello());

var hello = function () {
  return 'hello world';
};
```

- Acts like this:

```
var hello;

console.log(hello());    // raises "TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};
```

### Hoisting Variable and Function Declarations

- When `var` and `function` declaration are co-existing, assume the function is hoisted first.
- So the first example acts as the second example:

```
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

```
function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';
```

- Gotcha: One might think that because the function is defined below the variable assignment, it would know what it is. Hoisting makes this an incorrect assumption.
- When a `var` and a `function` have the same name, the function goes to the top and is declared. That means variable declaration merely becomes variable reassignment.

-  Snippet 1:

```
bar();             // logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
```

- becomes:

```
function bar() {
  console.log('world');
}

bar();
bar = 'hello';
```

- Snippet 2:

```
var bar = 'hello';
bar();             // raises "TypeError: bar is not a function"

function bar() {
  console.log('world');
}
```

- becomes:

```
function bar() {
  console.log('world');
}

bar = 'hello';
bar();
```

- The two objects which are not a `function` retain their order in both examples, because there is not hoisting for reassignment or function invocation (I think).
- A `var` can have the same name as a `function`, but a `let` or a `const` cannot.

### Best Practice to avoid confusion

- Use `let` and `const` instead of `var` wherever possible.
- When using `var` declare all variables at the top of the scope.
- When using `let` and `const` declare them as close to their first usage as possible.
- Declare functions before calling them.

### Hoisting isn't real

- It's just a mental model. And there are edge cases that defy this model.
- Syntax errors usually occur during the creation phase.
- There are reasons to prefer thinking about the creation phase rather than hoisting as the mental model to make sense of JavaScript.

### [More hoisting examples](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)

## [8	Practice Problems: Variable Scopes in JavaScript (1)](https://launchschool.com/lessons/7cd4abf4/assignments/e0447820)

1. 

```
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // => outer
testScope();    // => inner
console.log(a); // => outer
```

- line 4 changes the variable local to the function, but does not effect the global variable initialized on line 1.

2. 

```
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // => outer
testScope();    // => inner
console.log(a); // => inner
```

3. 

```
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv'; // this changes basket to tv
  }

  console.log(basket); // => empty

  let shop2 = function() {
    basket = 'computer'; // this changes basket to computer, which is what gets printed on line 23
  };

  const shop3 = () => {
    let basket = 'play station'; // this does not effect  the global basket, but does set a local basket.
    console.log(basket); // => play station
  };

  shop1(); 
  shop2();
  shop3();

  console.log(basket); // => computer
}

goShopping();
```

4. 

```
function hello() {
  a = 'hi'; // it's global because we don't declare it with a keyword. a is available everywhere, although it is not a property of the global object.
}

hello();
console.log(a); //
```

5.

```
function hello() {
  let a = 'hello';
}

hello();
console.log(a); // Reference error
```

6.

```
console.log(a); // => undefined
 
var a = 1;
```

7.

```
console.log(a);

let a = 1; // => Reference Error
```

8. Functions do get hoisted, but we nevefr call it in this example, so `a` is not defined.

```
console.log(a); // => refError

function hello() {
  a = 1;
}
```

## [9	Practice Problems: Variable Scopes in JavaScript (2)](https://launchschool.com/lessons/7cd4abf4/assignments/1d43f233)

1.

```
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say(); // => undefined
```

2.

```
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say(); // => Ref Error
```

3.

```
function hello() {
  a = 'hello';
  console.log(a); // => hello

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a); // => RefError
```

- because after hoisting this happens:

```
function hello() {
  var a;
  a = 'hello';

  console.log(a);

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);
```

4. Line 2 is declared as a global variable.

```
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello(); // => hello
console.log(a); // => hello
```

5. After the initial declaration of `a` on line 1, all other vars practically disappear.

```
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a); // => 4
```

6.

```
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a); // => hello (because `let` is block scoped)
```

7.

```
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo()); // 4
console.log(a); // 3
```

8. Vars are function scoped, so nothing inside the function effects line 1.

```
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope()); // superNested
console.log(a); // global
```

9.

```
let a = 'outer';
let b = 'outer';

console.log(a); // outer
console.log(b); // outer
setScope(a);
console.log(a); // outer
console.log(b); // inner

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
```

10.

```
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10); 
console.log(total); // 60
console.log(increment); // 15
```

11.

```
let a = 'outer';

console.log(a); // outer
setScope(); // TypeError
console.log(a); 

var setScope = function () {
  a = 'inner';
};
```

- because after hoisting it is the equivalent of:

```
var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};
```

## [10	Variables, Functions, and Blocks](https://launchschool.com/lessons/7cd4abf4/assignments/ce6c6188)

1.

```
let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar); // 2
```

2.

```
let myVar = [1];

function myFunc() {
  myVar = [2];
}

myFunc();
console.log(myVar); // [2]
```

3.

```
let myVar = [1];

function myFunc() {
  myVar[0] = 2;
}

myFunc();
console.log(myVar); // [2]
```

4.

```
let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar); // 1
```

5.

```
let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc();
console.log(myVar); // [1]
```

6.

```
let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2; // at this point myVar is an undefined variable
}

myFunc(); // TypeError: Cannot set properties of undefined (setting '0')
console.log(myVar);
```

7.

```
let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc(myVar);
console.log(myVar); // 1
```

8.

```
let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc(myVar);
console.log(myVar); // [1]
```

9.

```
let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar); // [2]
```

## [11	Review: Objects vs Primitive Values](https://launchschool.com/lessons/7cd4abf4/assignments/e30099b0)

- Primitive values are immutable, as we know. Here we explore the implications of this.
- It will be important to grok the following principles:
  - Every value in JavaScript is either a primitive value or an object.
    - Primitives are:
      - atomic values.
      - immutable.
    - Objects are:
      - compound values.
      - mutable

#### Every value in JavaScript is either a primitive or an object

- Other concepts depend on you knowing this basic fact. Things like how the value is stored in memory (which effects pass-by-reference v pass-by-value).
- Ask which it is as the first step to working with these concepts.

#### Primitives are atomic values

- In the following example there are 4 primitives and so the number of variables is equal to the number of values:

```
let a = 1;
let b = 'Hello';
let c = null;
let d = undefined;
```

#### Objects are "compound" values

- They are made of other values.

```
let a = [1, 'Hello', null, undefined];
```

- Here there is one variable, but 5 values

#### Primitive values are immutable

- The following code looks like it changes the string, but really it returns a totally new string:

```
let word = 'hello';
let newWord = word.replace('h', 'j');

console.log(newWord); // 'jello
console.log(word); // 'hello'
```

#### Objects are Mutable

```
let a = [1, 'Hello', true];
a[0] = 2;
a[1] = 'Goodbye';
a[2] = false;

console.log(a); // [2, 'Goodbye', false]
```

#### Exercises

1.

```
let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord); // Hello
```

2.

```
let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord); // Hello
myWord.replace('H', 'J');
console.log(myWord);  // Hello
myWord.split(' ');
console.log(myWord);  // Hello
```

3.

```
let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords); // ['Hello', 'Goodbye']
```

4.

```
let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords); // => [ 'Hello' ] because Array.concat is not a destructive method
```

5.

```
let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords); // ['Hello'] because it's a string and therefore immutable
```

6.

```
let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords); // ['HELLO']
```

## [12	Variables as Pointers](https://launchschool.com/lessons/7cd4abf4/assignments/23776776)

### Exercises

1. Despite appearances, these are two different strings with two different memory addresses.

```
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord); // Hello
console.log(myOtherWord); // Hello
```

2.

```
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord); // Goodbye
console.log(myOtherWord); // Hello
```

3. Because `Array` is a reference type. SO the value stored in memory is a reference to another location in memoryqq

```
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myOtherWords); // ['Hi', 'Goodbye']
```

4.

```
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords); // ['Hi', 'Bye']
console.log(myOtherWords); // ['Hello', 'Goodbye']
```

5.

```
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // Hello
```

6.

```
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // Hello
```

## [13	Pass by Reference vs Pass by Value](https://launchschool.com/lessons/7cd4abf4/assignments/c7e3e102)

- How objects are passed to functions.

#### What does Pass-by-Value mean?

- The variable hands over its value to the function and walks away unchanged. That means whatever happens in the function cannot change the original variable.

#### What does Pass-by-Reference mean?

```
function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']
```

- Or:

```
function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed"];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']
```

#### What Javascript does

- If the input is primitive its pass by value, if its compound, its pass by reference (depending on what operators you use)

#### Return Values

- We can talk about return values being pass-by-reference/value in the same way as arguments. 

#### Assignment

- It is incorrect to talk about assignment as either one, but in reality they do mimick these laws, so it can be a helpful mental model.

#### Exercises

1.

```
function changeMyWord(word) {
  console.log(word); // Hello
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord); // Hello
```

2.

```
function changeMyWord(word) {
  console.log(word); // Hello
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord); // HELLO
```

3.

```
function changeMyWord(word) {
  console.log(word); // Hello
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord); // Hello
console.log(myOtherWord); // HELLO
```

4.

```
function changeMyWords(words) {
  console.log(words); // ['Hello', 'Goodbye']
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hi', 'Goodbye']
```

5.

```
function changeMyWords(words) {
  console.log(words); // ['Hello', 'Goodbye']
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hello', 'Goodbye']
```

## [14	Variables, Functions, and Blocks: Revisited](https://launchschool.com/lessons/7cd4abf4/assignments/8ac6ad6d)

- Alles klar

## [15	Exercises: Variables, Functions, and Blocks](https://launchschool.com/lessons/7cd4abf4/assignments/01c3e47c)

- Alles Roger : all correct, too easy.

## [16	Closures](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745)

- Allows us to access variables in scope at the variables definition, even if they are no longer in scope.

### What to Focus on

- Mastery
- They are conceptually simple, but in practice they can catch one out easily. (Especially if one thinks of them as a runtime feature (??))
- (Technically they are a mixture of lexical and runtime features.)
- They are an artifact of the code's structure, not how the code runs.
- Focus on:
  - What is a closure
  - What is in a closure
  - When is a closure created
  - What is the relationship between closures and scope
  - What do we mean when we say that closures are defined lexically
  - What is partial function application

### Closures

#### A helpful mental model

#### Examples of closure

### Partial Function Application

#### Recognizing Partial Function Application

### What are closures good for?

### Summary

## [17	More Exercises](https://launchschool.com/lessons/7cd4abf4/assignments/7ca19c4e)

- complete [these](https://launchschool.com/exercise_sets/4f20da02)

## [Quiz](https://launchschool.com/lessons/7cd4abf4/assignments/d368f571)
