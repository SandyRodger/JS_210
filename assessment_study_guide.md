# [study guide](https://launchschool.com/lessons/56ad2094/assignments/2ec8fa4d)

### specific topics of interest:

- "some of the bullet points are super broad" - Mattic.

You should be able to clearly explain the following topics:

For each heading:

- Links:
- My summary:
- Launch School examples:
- My examples:

## 1. assignments and comparison

- In JS assignment is achieved with the `=` operator. This is distinct from **declaring** a variable using the `let`, `const` and `var` keywords, with which assignment is often combined.
- Comparison in JS is accomplished with the `==` (non-strict equality) and `===` (strict equality) operators.
  - `===` only returns true if both operands are the same value and type:
    - `1 === '1'` => false
    - `1 === 1` => true
  - `==` will return true if the operands are of different types, but the same values.
    - `1 == '1'` => true
    - `1 == 2` => false
  - When comparing compound objects the equality oprators evaluate whether the two oprands are the same object, regardless of their content.
  - In order to compare the objects contained within, one would have to write one's own comparison function iterating through the values referenced within. ie:

```
function arraysEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }

  return true;
}
```

- When an array is compared with a non-array using `==`, the array is first implicitly converted into a string, then if the objects are still of different types more implicit conversions take place. This is rarely useful.

SHWETANK:

implicitly converts one operand's type to match the other so they're the same type.
"implicit type coercion" is quite unpredictable, so it's recommended to avoid it.
let y = 1 this is declaration AND assignment
comparison will always return a boolean.

- In JS assignment is achieved with the `=` operator. This is disctinct from declaring a variable using the `let`, `const` and `var` keywords, with which it is often combined.
- Comparison in JS is accomplished with the `==` (non-strict equality) and `===` (strict equality) operators.
  - `===` only returns true if both operands are the same value and type. ie ` 1 === '1'`
  - `==` will return true if the operands are of different types, but the same values. ie ` 1 == '1'`
  - When comparing compound objects the equality oprators evaluate whether the two operands are the same object, regardless of their content.
  - In order to compare the objects contained within, one would have to write one's own comparison function iterating through the values referenced within. ie:

```
function arraysEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }

  return true;
}
```

- When an array is compared with a non-array using `==`, the array is first implicitly converted into a string, then if the objects are still of different types more implicit conversions take place.

## 2. Variable scope, especially how variables interact with function definitions and blocks

- There seems to be too much to review. Chapters to review:
  - Lesson 1:
    - [Variables](https://launchschool.com/lessons/7377ece4/assignments/4a43f341)
  - Lesson 2:
    - [Defining functions](https://launchschool.com/lessons/7cd4abf4/assignments/067955f4) - tick
    - [Functional scopes and lexical scoping](https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7)
      - A variable's scope is the part of the program that can access the variable by name.
      - The Global scope is the default scope, which all variables have access to, unless they are enclosed by another scope.
      - Every function or block creates a new variable scope.
    - [Practice problems: Variable Scopes in Javascript](https://launchschool.com/lessons/7cd4abf4/assignments/e0447820)
    - [Variables, functions and blocks](https://launchschool.com/lessons/7cd4abf4/assignments/ce6c6188)
    - [Variables, functions and blocks: revisited](https://launchschool.com/lessons/7cd4abf4/assignments/8ac6ad6d)
    - [Closures](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745)

- A variable's scope is the part of the program that has access to the variable by name.
- Every function or block creates a new scope for variables.
- Unlike Ruby, variables declared in the global sope do not have to be passed into Javascript functions.
- Block scope:
  - variables declared inside blocks are not visible outside, but variables declared outside blocks are visible inside.
- Programs have a hierarchy of scopes, which means you can shadow/hide variables in higher scopes, because JS will return the first variable it finds that matches the name.


SHWETANK:

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

## 3. Function scope

- Links:
  - [L2: function scope](https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7)

- My summary:
  - functions create their own local scope
  - The code within a function can access all variables in all surrounding scopes. (Japanese toilets) Even if that function is nested within other functions. (I have written this imprecisely, I think).
  - Variables declared inside a function have function scope and cannot be accessed outside the body of the function. i.e. variables can reach out, but you cannot reach in.
- Launch School examples:
- My examples:

SHWETANK:

- versus block scope

## 4. [hoisting](https://launchschool.com/lessons/7cd4abf4/assignments/510e62bb)

### What is hoisting?
  - During the creation phase of a program, declarations seem to get lifted up to the top of their scope. 
  - This is all tied up with the effect of JS engines having a creation phase and an execution phase.
    - Execution phase is what you think of as regular running of the program line by line.
    - Before that it does a few things in preparation, such as finds all the variable, function and class declarations.

### `var` vs `let`/`const`

  - When hoisted `var` is assigned to `undefined` but the others are 'not set' and if you try to access them it with raise an exception. This is the "temporal dead zone".
  - `var` at the top level becomes a property of the global object. This makes `let`/`const` safer. (Unless declared inside a function).
  - That's because `var` is function scoped, so is visible in the function it was declared.
  - `let` is block scoped, so only visible within the block where it's created.
      - Not everything between curly braces is a block, for instance: `let foo = { bar: 42,};` is not a block, it's an object.

```
function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a); // => undefined   :  here the declaration happened, but the assignment did not because the if statement never evaluated to true.
}

foo();
```
    
    - Visibility scope is like "actual scope" and declared scope is "yeah - technically, scope"
    
### How do functions and classes interact with hoisting? How do they differ?
  - `let`, `const` and `class` are declared with block scope, while `var` and `function` are declared with function scope. Even if they're not declared in a function or block.
  - For functions body is hoisted as well.
  - In nested functions, the inner function gets hoisted to the top of the function.
  - Don't nest function declarations inside non-function blocks, because the behaviour is non-standard and unpredictable.
  - Function expressions often involve assigning a function to a declared variable, in which case the variable gets hoisted, but the assignment doesn't.
  - Function declarations are hoisted about variable delcarations. so:

```
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

### Best practices:

- Whenever possible, use `let` and `const` instead of `var`.
- If using `var` declare all at the top of the scope.
- Declare `let` and `const` as close to their first usage as possible.

### How does hoisting really work? 

- The mental image of hoisting implies that things get moved out of order. This is not the case.
- Hoisting is merely a useful mental model to explain why programs act as they do. The real cause of this behaviour is the consequence of JS's two phases.
- In the creation phase JS scans the program for Variables, functions and classes and adds them to the scope. Which scope it is added to depends on where the declaration is (global, function, block).
- This means at the end of the creation phase JS knows all the identifiers in your prgram and what scope they belong to.
- When the execution phase begins JS no lo ger cares about declarations. It concerns itself only with initializations and function/class definition.

```
boo();

function boo() {
  console.log("Boo!");
}
```

- In the code above:
  - During the creation phase JS encounters one declaration. `boo` in line 3. This is added to the global scope.
  - During the execution phase, in line 1, the function `boo()` is invoked. JS looks to the global scope because that is the scope in which `boo()` is found. That name is found since it was saved their during the creation phase. 

SHWETANK:

- Talk about the TDZ (one indication of this is that the error messages will differ). Make sure you have an example and a spiel for this.

```
console.log(x);

let x = 1;
```

SHWETANK:

- float is not a primitive value. JS only has Numbers

- Number, String, Boolean, Null, Undefined

## 5. primitive values, types and type conversions/coercions

SHWETANK:

- float is not a primitive value. JS only has Numbers

- Number, String, Boolean, Null, Undefined

## 6. object properties and mutation

SHWETANK:


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

## 7. understand the differences between loose and strict equality

- They act the same if both operands are the same type. If not, a loose equality operator will perform implicit conversions.
- [List of implict conversions here](https://github.com/SandyRodger/JS_210/blob/main/L1_Javascript_basics.md#equality-operators)

## 8. how passing an argument into a function may or may not permanently change the value that a variable contains or points to

- That would be a side-effect. It depends largely on whether the argument passed in points to a compound object or primitive value.

SHWETANK:


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

## 9. working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.

### forEach

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### map

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### filter 

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### find

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## 10. understand that arrays are objects, and be able to determine whether you have an Array

- `isArray` is the obvious choice. If that's not on the table then `typeof`. What else do you want?

## 11. variables as pointers

- [link to book](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers)

## 12. console.log vs return



## 13. truthiness: false and true vs. falsy and truthy



## 14. function definition and function invocation



## 15. function declarations, function expressions, and arrow functions

### Arrow functions:

- Characterised by:
  - Implicit return.
  - Lexical `this` binding. (They inherit `this` from surrounding scope)
  - No `arguments` object.
  - Cannot be used with `new` keyword (ie as a constructor) because they have no `prototype` property.
  - No `super` keyword.

## 16. implicit return value of function invocations

- undefined, unless you `return` that shit.

## 17. [first-class functions](https://github.com/SandyRodger/launch_school_books/blob/main/javascript.md#first-class-functions)


SHWETANK:


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
- This will be on the assessment
- key concept. Know what you're going to say about it.
- For example:

```
function foo(x) {
  x();
}

function y() {
  console.log('called y');
}

foo(y);
```

## 18. [Partial function application](https://github.com/SandyRodger/JS_210/blob/main/L2_functions_and_variable_scope.md#partial-function-application)
## 19. [AND closures (says Mattic)](https://github.com/SandyRodger/JS_210/blob/main/L2_functions_and_variable_scope.md#16closures)

- Writing functions in a way that their arguments can be added via different wrapping functions. This involves 3 distinct parts:

1. A primary function:

```
const add = function(x, y) {
  return x + y;
}
```

2. A generator function:

```
function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}
```

3. Applicatation:

```
let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(3));  // 8
console.log(addFive(55)); // 60
console.log(addTen(3));   // 13
console.log(addTen(55));  // 65
```

- This is one of the key applications of closures. When we define `makeAdder` the program takes a snapshot of the variables in its scope, including `firstNumber`. So even after `makeAdder` has finished executing, the returned functions retains access to `firstNumber` in their closures.
- This is an example of using closures 

## 20. side effects

- See #22

## 21. [naming conventions (legal vs idiomatic)](https://github.com/SandyRodger/JS_210/blob/main/L3_practice_problems_logic_and_flow.md#naming-conventions)

- Legal naming rules means how the code must be written in order for it work. Idiomatic rules is what is commonly accepted and therefore required for readability/maintainability.
- camelCase
  - Variables and Functions.
  - Also imported function names, like `const readlineSync = require('readline-sync');`

- SCREAMING_SNAKE_CASE
  - constants


## 22. [pure functions and side effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5)

There are 5 side effects:

1. **Reassigning** variables outside itself (AKA 'non-local variable')
2. **Mutating** the value of objects outside itself (AKA 'objects referenced by non-local variable')
3. **Reading** from or **writing** to any data-entity outside your program (like files, network connection).
4. Raising an **exception**.
5. **Calling a function that has side-effects**.

- Technically side effects happen when you **call** a function, because it could be pure with some arguments and impure with others.
- In practice we talk about functions **being** impure, because it usually isn't argument dependent.
- Unexpected side effects are a major source of bugs.

#### Side-efects through reassignment

```
let number = 42;
function incrementNumber() {
  number += 1; // side effect: number is defined in outer scope
}
```

#### Side-effects through mutation

```
let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop(); // side effect: alters the array referenced by letters
}
```

#### Side effetcs through input/output

- This is a super long list, but here it is (non-exhaustive):

  - Reading from a file on the system's disk
  - Writing to a file on the system's disk
  - **Reading input from the keyboard**
  - **Writing to the console**    are the two you need to remember.
  - Accessing a database
  - Updating the display on a web page
  - Reading data from a form on a web page
  - Sending data to a remote web site
  - Receiving data from a remote web site
  - Accessing system hardware such as:
  - The mouse, trackpad, or other pointing devices
  - The clock
  - The random number generator
  - The audio speakers
  - The camera

#### Side effects through exceptions

- As you know.

#### Side effects through other functions

- Only if the side-effect effects outside the code. So not in the following example:

```
function insertNumberInOrder(arrayOfNumbers) {
  arrayOfNumbers = arrayOfNumbers.slice(); // creates a copy of an array
  arrayOfNumbers.push(arrayOfNumbers); // not a side effect since copy of array
  arrayOfNumbers.sort((a, b) => a - b); // sort has side effects within function
  return arrayOfNumbers; // function has no side effect
}
```

- Common examples are:
  - `console.log`
  - `readline.question`
  - `new Date()` because it accesses the clock
  - `Math.random()` because it accesses the random number generator.
#### Mixing side-effects and return values

- Functions should EITHER return a useful value OR have a side-effect. Not both. Just because it complicates things. There are exceptions, kike reading a value from a database and returning that value.

#### Pure functions

- Have no side-effects
- The return value depends solely on the arguments.
- Example:

```
const square = value => value * value;
```

- A key part of this idea is that functions need only adhere to purity during their lifetime. This begins when the function is created and ends when it is destroyed.
- Nested functions only exist for the duration of the outer function's execution. They are created every time the outer function is invoked and so may take different arguments and priduce different results. But they would still be pure.
- A function can be pure while failing to return a useful value. For example:

```
function sum(a, b) {
  a + b;
}
```

## 23. [strict mode vs. sloppy mode](https://launchschool.com/gists/406ba491)

### What is strict mode? How does it differ from sloppy mode?

- prevents (some) silent errors
- Prevents some JS code that blocks optimization and thereby speeds up JS.
- Forbids names and syntqax that might screw up later versions of JS.

- These have the effect of:
  - preventing bugs
  - making debugging easier
  - Helping your code run faster
  - Avoid future conflicts with the language.

### How do you enable strict mode at the global or function level?

- Write `"strict mode;"` (as a pragma) at the very beginning of your program or function.
  - (nested function inherit strict mode from their surrounding scope).
  - Once enabled, you cannot disable it later.

### Describe how code behaves under both strict and sloppy mode.

- You can't create variables by assigning them without `let` `const` or `var. This measn you can't accidentally overwrite or create similarly named variables.
- It effects `this`, but it's not covered in JS210.
- Numbers that look like octal numbers raise an error. That means they have leaading zeros, but no 8 or 9. In sloppy mode it's interpreted as an octal.
- Numbers that begin with `0` or `-0` raise an error (except 0 or decimals).
- No params with the same names
- no newer reserved words like `static`
- prevents you from using `delete` on a variable name
- forbids binding `eval` and `arguments`
- disables access ot some properties of `arguments` in functions
- disables `with`

### When is strict mode enabled automatically?

- Within the body of a class.

### When should you use (or not use) strict mode?

- All new code
- When adding new code to old code-bases do function-scoped strict mode.

## 24. [JavaScript syntactic sugar](https://launchschool.com/gists/2edcf7d7)

There are 6 things explained in this section of the course:

1. Concicse property initializers
2. Concise methods
3. Object Destructuring
4. Array destructuring
5. Spread syntax
6. Rest Syntax

1. Concise property initializers:

This is normal:

```
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};
```

but if the object is going to have some keys with the same name as some variables, you can do this:

```
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}
```

2. Concise methods

If your function is inside an object it normally looks like this:

```
let obj = {
  foo: function() {
    // do something
  },

  bar: function(arg1, arg2) {
    // do something else with arg1 and arg2
  },
}
```

but with sugar it can be:

```
let obj = {
  foo() {
    // do something
  },

  bar(arg1, arg2) {
    // do something else with arg1 and arg2
  },
}
```

3. Object destructuring

This is for passing multiple properties from an object to other variables. Without sugar it would look like:

```
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

let foo = obj.foo;
let bar = obj.bar;
let qux = obj.qux;
```

With sugar:

```javascript
let { foo, bar, qux } = obj;
//or
let { qux, foo, bar } = obj;
//or
let { qux: myQux, foo, bar } = obj; // where a new variable called myQux is created
```

or as function parameters:

```
function xyzzy({ foo, bar, qux }) {
  console.log(qux); // 3
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

xyzzy(obj);
```

or to save some properties as their own variables:

```
({ foo, bar, qux } = obj);
```

4. Array destructuring:

```
let foo = [1, 2, 3];
let [ first, second, third ] = foo;
```

or

```
let bar = [1, 2, 3, 4, 5, 6, 7];
let [ first, , , fourth, fifth, , seventh ] = bar;
```

which is useful for multiple assignments in a single expression:

```
let one = 1;
let two = 2;
let three = 3;

let [ num1, num2, num3 ] =  [one, two, three];

console.log(num1);   // 1
console.log(num2);   // 2
console.log(num3);   // 3
```

or when you have to swap the values of some variables:

```
let one = 1;
let two = 2;

[ one, two ] =  [two, one];

console.log(one);   // 2
console.log(two);   // 1
```

Or combine with rest syntax to split an array into two:

```
let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar);   // 1
console.log(qux);   // [2, 3, 4]
```

5. Spread syntax

- could be translated as "just, everything inside this, to be spread into seperate variables"
- `...` for inputting a whole array into a function:

```
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo = [3, 7, 11];
// without sugar:
add3(foo[0], foo[1], foo[2]); // => 21
// with sugar
add3(...foo); // => 21
```

- make a clone of an array:

```
let foo = [1, 2, 3];
let bar = [...foo];
console.log(bar);         // [1, 2, 3]
console.log(foo === bar); // false -- bar is a new array
```

- concatenate arrays
- insert an array into another array
- make a clone of an object
- merge objects:

```
// Merge objects
let foo = { qux: 1, baz: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
obj;  // => { qux: 1, baz: 3, sup: 4 }
```

6. Rest syntax

- could be translated as "just, whatever's left, saved to a single variable"

with arrays:

```
let foo = [1, 2, 3, 4];
let [ bar, ...otherStuff ] = foo;
console.log(bar);        // 1
console.log(otherStuff); // [2, 3, 4]
```

with objects:

```
let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
let { bar, baz, ...otherStuff } = foo;
console.log(bar);        // 1
console.log(baz);        // 3
console.log(otherStuff); // {qux: 2, xyz: 4}
```

- It's mostly used when working with functions that take an arbitrary number of parameters:

```
function maxItem(first, ...moreArgs) {
  let maximum = first;
  moreArgs.forEach(value => {
    if (value > maximum) {
      maximum = value;
    }
  });

  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3));
```

## Gaps in my knowledge:

### Expressions v Statements v declarations:

- Expression: Any valid code that resolves to a value [link](https://launchschool.com/lessons/7377ece4/assignments/d84fdace)
- Statement: Unlike expressions, statements in JS don't resolve to useful values, instead they control the execution of the program. So a variable assignment is an expression, but a variable declaration is a statement:

```
let a;                // a statement to declare variables
let b;
let c;
let d = (a = 1);      // this works, because assignments are expressions too
let e = (let f = 1);  // this gives an error, since a statement can't be used
                      // as part of an expression
```

- Declaration: Writing a function or variable without assigning it to something. Even placing parentheses around a function declaration makes the whole thing an expression containing a declaration

```javascript
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});
```

## Mattic advice:

- Build your own study guide in your own words
- Practice terminology (phase 2)
- (Phase 3) Go through official solutions and make sure it's fresh in your memory, ESPECIALLY TEST-CASES. "Something a bit funky from the exercises". Then paste in the concept from your list of concepts.
- There will be trick-questions, testing for edge functionality.
- synthesis / describe in your own words - very important.

## To do before assessment:

|  | complete | 2nd | 3rd |
| :--- | :---: | :---: | :---: | 
| "Build your own study guide in your own words" (Have written answers for all "specific topics of interest") |
| Go through JS210 for a third time looking for gaps |
| Find more problems to solve (Mattic?) / mock tests |
| Attend at least 1 SPOT session| yes
| sift through Discussion pages for all 6 lessons.|
| Re-do all the quizes | 22.6.24 |

## Quiz mistakes (3rd go)

- L1:
  - A primitive value cannot be changed after being created, any operation that appears to do modify a string creates an entirely new string.
  - Although is is true that the increment operator (`++`) leads to uncertain behaviour, this is not because of the presence or absence of the condition expression.
- L2:
  - Function expressions aren't hoisted. The variable is hoisted and when executed then the function declaration is evaluated.
  - It is correct to say that hoisting occurs when javascript processes variable and function declarations within a scope, before it executes any other code in that scope.
  - Lexical scoping is also known as 'static scoping'
  - When a variable is reassigned, this is known as dynamic typing. Be careful not to confuse it with variable shadowing.
  - When you see `console.lof(foo())` the function is called to completion before the `console.log()` method is called.
  - If a function does not begin the line with the word `function` it is not a declaration, but an expression.
  - Declarations will always create variables and therefore will have names. Not so for expressions.
- L4:
  - Bracket notation is an operator, not a method in JS.
  - Silly mistake: arrays are zero-based.
- L5:
  - If a function mutates one of its arguments, this is considered to be a side-effect.
  - If a function relies on a variable scoped outside of itself, it is not pure. So, yes pure functions can take arguments, but they cannot rely on variables scoped outside, because that would be something of a wild-card given that it might be a different value from one invocation to the next.

## My blind-spots:

- What is a callback function?
  - A function that is passed as an argument to another function in Javascript. They are a crucial aspect of asynchronous programming.
  - Here's how one might be used with an array:

```
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);  // Outputs: [2, 4, 6, 8, 10]
```
