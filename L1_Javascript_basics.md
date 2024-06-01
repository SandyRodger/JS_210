# [JavaScript Basics](https://launchschool.com/lessons/7377ece4/assignments)

## [1. About This Course](https://launchschool.com/lessons/7377ece4/assignments/ddcdcfdb)

- This course is for people who have already learnt a programming language. (So it's not what people doing the JS101 course will do).
- We look at:
  - Language:
    - grammar
    - syntax
    - data-types
  - Functions and higher order functions
  - Arrays and Objects as data-structures
  - Corse built-in methods
  - Writing idiomatic and stylistic code

- The secret to learning another language is FORGETTING YOU KNOW THAT OTHER LANGUAGE. (So, stop comparing JS to RB) Remember Ruby concepts (like scoping), but forget the syntax.
  
## [2. JavaScript Versions](https://launchschool.com/lessons/7377ece4/assignments/0e4c3df9)

- Currently ES10
- ES6 was a big jump forward. For this reason it's common to refer to modern JS as ES6+.
- You can use this [compatibility table](https://compat-table.github.io/compat-table/es6/) to check whether a browser supports the features you need.
- [Babel](https://babeljs.io/) is a tool for using JS that isn't compatible with a browser. The program translates between the two.
- Many code-bases use ES5 (from 2009), so you'll have to be familiar with modern and traditional JS for at least the next few years.
- Chrome is the best for modern JS. Firefox is a close second. Microsoft are usually the lst to catch up. Mobile support is usually good, but often misses a few features.
- This course sticks largely to ES6+ features that have wide support.
- It also covers traditional JS features like `var` and hoisting.

## [3. Resources](https://launchschool.com/lessons/7377ece4/assignments/c3c0c9c6)

### Read the book

- [The JS book](https://github.com/SandyRodger/JS_210)
  - We cover a lot of the same ground in this course.
  - The book clarifies the differences between
    - `let` and `const`
    - function declarations, function expressions and arrow functions

### JavaSript Documentation

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Be careful when googling because a lot of the results will refer to older JS versions. LS material always takes presedence.


## [4.Running your Code](https://launchschool.com/lessons/7377ece4/assignments/cc16ec53)

- Place your JS code in an HTML file and run it in chrome.
^
Method 1:

- Have the bare bones of an HTML file and put your JS code between `<script>` tags:

```
<body>
  <script>
    console.log('I run automatically!');
  </script>
</body>
```

Method 2:

- Have a HTML file with only a script tag in it referencing the JS:

```
<script src="05_my_javascript.js"></script>
```

```05_my_javascript.js
console.log('Here is a cheeky dash of Javascript');
```

- Avoid combining these two methods

Method 3:

- Seldom will you need to use Node:
  - Put the JS in a file
  - Use `node` from the command line to load and run the file:
  - `node something.js`

## [5. Code Style](https://launchschool.com/lessons/7377ece4/assignments/88ed1c52)

- There are many opinions about proper JS style. Your own style will change over time. For now, stick to one style. This style.

### Naming conventions:

#### Idiomatic names
#### Valid but non-idiomatic names

- We're using 'idiomatic names'.
- Non-idiomatic names can still be valid. External libraries sometimes use them because they are easy to type and unlikely to conflict with other libraries.
- (There's a lot here that I'm not writing in my notes. Will this come back to bite me?)

#### Invalid names

### Avoid magic numbers:

- Numbers that appear in your program without any explanation of what they are. Use constants instead:

```
const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; cardNumber += 1) {
    hand.push(dealCard());
  }

  return hand;
}
```

- These constants are usually defined in the top level of a program.
- Try to be explicit with your constant declarations:

```
// not this:

const FIRST_CHARACTER_CODE = 97;
const LAST_CHARACTER_CODE = 122;

// but this

const FIRST_CHARACTER_CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt();
```

### Formatting

- Indentations are always two spaces, rather than a tab.
- Operning curly brace is on the same line as the initial statement, closing is on its own line.
- You may condense short curly-brace statements to one line, but not too long (hard to read quickly).
- Semicolons terminate a statement. Exceptionsa are:
  - `function` declarations
  - `class` declarations
  - `if` statements
  - `for` statements
  - `while` statements
- spaces before an after operators and equals.
- one `let` per variable.

## [6. Data Types](https://launchschool.com/lessons/7377ece4/assignments/bd02b66c)

- [JS book](https://github.com/SandyRodger/launch_school_books/blob/main/javascript.md#datatypes)
- Primitives: We don't look at symbols(ES6) and bigints(ES9) in this course.
- Compount data-type: object
- `typeof` operator:

```
typeof 1.2;        // "number"
typeof 'hello';    // "string"
typeof false;      // "boolean"
typeof undefined;  // "undefined"
typeof { a: 1 };   // "object"
typeof [1, 2, 3];  // "object" (yes: an array is an object)
typeof null;       // "object" (null both is and isn't an object)
```

- `null` is of the type `object`, because of a mistake dating back to the origins of JS.

### Number

- JS uses [double precision floats]
```
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```

- Floating point numbers will have slight imprecisions, for instance:

```
0.1 + 0.2;    // returns 0.30000000000000004, not 0.3!
```

- so avoid fractional numbers. That means use pennies instead of pounds, seconds instead of hours and mm instead of cms.

### Boolean

- yup.

### String

- No size limit
- No functional distinction between double and single quotes.

### Capitalization

- Yup.

## [7. More on Strings](https://launchschool.com/lessons/7377ece4/assignments/84419ace)

### Special Characters

- Escape them with `\`
- `\n` for newline.
- `\t` Tab
- `\r` retrun
- `\v` Vertical tab
- `\b` backspace
- If a quote is enveloped by single quotes, then internal quotes must be escaped, and the same for double quotes.

```
let quote = '"It\'s hard to fail, but it is worse never to have tried to succeed." - Theodore Roosevelt';
let quote2 = "\"It's hard to fail, but it is worse never to have tried to succeed.\" - Theodore Roosevelt";
```

### String Concatenaton

```
let firstName = 'John';
let lastName = 'Doe';
firstName + ' ' + lastName;  // "John Doe"
```

### Character Access

- `String.prototype.charAt`:

```
'hello'.charAt(1);  // "e"
'hello'[1];         // "e"  - In JS bracket notation is an operator.
```

### String Length

- Strings have a `length` property.

### Working with Long Strings

- You can use concatenation to make it more readable:

```
let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
             'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
             'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
             'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
             'in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
             'nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
             'sunt in culpa qui officia deserunt mollit anim id est laborum.';
```

- Alternatively use a `\` so JS ignores the newline:

```
let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
enim ad minim veniam, quis nostrud exercitation ullamco laboris \
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \
in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
sunt in culpa qui officia deserunt mollit anim id est laborum.';
```

### JavaScript's Built-in String Methods

- [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)'s the MDN.

## [8. Primitive Values are Immutable](https://launchschool.com/lessons/7377ece4/assignments/74cfbc2a)

- So remember to save any operation performed on a primitive:

```
a = 'hello';
a.toUpperCase();  // the "hello" string is not mutated, but a new "HELLO" string is returned
a;                // still "hello"
```

## [9. Variables](https://launchschool.com/lessons/7377ece4/assignments/4a43f341)

- Think of them as containers that hold data.

### Naming Variables

- Have empathy, often it's your future self who must comprehend the name.
- JS vars are:
  - Case sensitive:
  - any length
  - Always start with (and contain only) a Unicode letter (?), `_` or `$`
  - Can't be a [reserved word](https://262.ecma-international.org/5.1/#sec-7.6.1.1)

### Declaring Variables

- There is a subtle difference between declared and undeclared vars in JS. More on that later.
- We declare vars with:
  - `let`
  - `var`
  - `const`
- `var` is the traditional way. (`let` and `const` came with ES6)

```
// single declaration
let myVariable;

// multiple declarations
let myVariable;
let otherVariable;
let anotherVariable;

// Constant declaration
const FOO = 'hello';

// var declaration
var myVariable;
```

### Variable Assignment and Initializers

- Once a var is declared you can use `=` operator to assign a value to it.

```
let number; // at this point it is equal to undefined

number = 3;  // variable `number` is assigned with value 3
```

- Or combine a var declaration with an initializer:

```
let myVariable = 'Hello, World';
var otherVariable = 23;
let anotherVariable = true;
const FOO = 42;
```

- Initializers look like assignment, but arent.
  - This is declaration: `let myVariable`
  - This is assignement: `myVariable = 1`
  - This is an initializer: `let someVariable = 42` , ie the combination of variable declaration + `=` + the expression the right of `=`.

- Once a `const` is declared, you cannot assign a new value to it. That means, unlike a var, it must be initialized and declared at the same time:

```
const BAR; // Uncaught SyntaxError: Missing initializer in const declaration
const FOO = 3;
FOO = 4; // Uncaught TypeError: Assignment to constant variable.
```

### Dynamic Typing

- JS is a dynamically typed language, which means that a variable may refer to a value of any data type and can be reassigned to a different type wihtout throwing an exception.

## [10. Operators](https://launchschool.com/lessons/7377ece4/assignments/8cdc0e98)

- The operands are the input to the operator.

### Arithmetic Operators

- `%` is the remainder operator (not modulo).This only makes a difference if one of the numbers is negative. `10 % -3` would return `1`, whereas in Ruby for instance it would return `-2` instead

### Assignment Operators

- Using an operator with `=` like `a %= b`.

### Comparison operators

- Returns a boolean value.
- JS tries to implicitly convert the operands. This can cause big problems, so many devs avoid `==` and `!=` altogether.

### String Operators

- Char by char until the shortest is done:

```
'Ant' > 'Falcon';  // false
// String comparisons use Unicode lexicographical ordering
'50' < '6';        // true ('5' precedes '6' lexicographically)

console.log('a' < 'b'); // true
console.log('abacus' < 'b'); // true
console.log('50000000' < '4'); // false
```

### Logical Operators

- `&&`
- `||`
- `!`

## [Expressions and Statements](https://launchschool.com/lessons/7377ece4/assignments/d84fdace)

### Expressions

- Any valid code that resolves to a value. The most common types are:
  - Arithmetic
  - String
  - Logical

```
let a;
let b;
let c;

a = 3;
b = 10 + 3;         // 10 + 3 is an expression that resolves to 13
                    // and used as part of the assignment for sum
c = (a + (3 + b));  // a more complicated expression
```

### Operator Precedence

- Multiplication and addition before division and subtraction.
- Parentheses override default precedence.

### Increment and Decrement Operators in Expressions

- `++` and `--` can prefix or postfix the operand.
- If postfixed JS evaluates the expression and then modifies the operand
- If prefixed, JS modifies the operand and then evaluates the expression.

```
let a;
let b;
let c;

a = 1;
b = a++;  // equivalent to "b = a; a += 1;". so now b is 1 and a is 2
c = ++a;  // equivalent to "a += 1; c = a;". so now c is 3 and a is 3
```

### Logical Short Circuit Evaluation in Expressions

- Expressions using logical And and logical Or are evaluated using 'short-circuit' rules. That means it doesn't evaluate more than it absolutely must. Otherwise put, it will excape the oepration as soon as it can.

```
let a = true;
let b = false;

a || (b = true);  // b is still false after this, because (b = true) is never evaluated
b && (a = 1);     // a is still true after this, because (a = 1) is never evaluated
```

### Statements

- Statements don't resolve to useful values (unlike expressions). They are just for controlling the execution of the program.
- In the following example variable declarations are statements (returning nothing), but the variable assignments are declarations (returning the value assigned).
- So the thing to remember is that statements help you to do something, but do not return values:

```
> 5 * let foo
SyntaxError: Unexpected identifier

> console.log(let bar)
SyntaxError: missing ) after argument list
```

- I might need to have another look at this.

```
> let foo = 42
= undefined
```

- Above, the code to the right of the `=` (`42`) is an expression on its own. It's also a part of the bigger expression.

## [12. Input and Output](https://launchschool.com/lessons/7377ece4/assignments/4ef1c2e1)

### Using prompt() to Ger User's Input

```
let name = prompt('What is your name?');
let guess = prompt();           // blank prompt window
```

- pops up a dialogue box with optional message in the browser
- User input is always captured as string.

### Using alert() to Display a Message to the User

- Displays a dialogue box with a `ok` button. It's for when you don't need any input from the user.

```
alert('Hello, world');
alert()
```

### Logging Debugging Messages to the JavaScript Console

- `console.log` outputs to the console, so use it for debugging purposed because normal users won't see it. 

## [13. Practice Problems - Variables and Numbers](https://launchschool.com/lessons/7377ece4/assignments/bca48745)

1.

```
let numerator = 10;
console.log(numerator);
```

2.


```
const DENOMINATOR = 2;
console.log(DENOMINATOR);
```

...

10.


```
let answer = (11 + 31) * 3
console.log(`answer is ${answer}`); // => 126
```



## [14. Explicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3899592c)

### Converting Strings to  Numbers

```
Number('1');             // 1
Number('abc123');        // NaN
parseInt('123', 10);     // 123
parseInt('123.12', 10);  // 123, will only return whole numbers
parseInt('123.12');      // 123
parseFloat('123.12');    // 123.12, can handle floating point values
```

### Converting Numbers into Strings

```
String(123);             // "123"
String(1.23);            // "1.23"
(123).toString();        // "123"
(123.12).toString();     // "123.12"
// You can convert with addition, but it's not super-clear, so avoid it.
123 + '';                // "123"
'' + 123.12;             // "123.12"
```

### Booleans to Strings

```
String(true);            // "true"
String(false);           // "false"
true.toString();         // "true"
false.toString();        // "false"
```

### Primitives to Booleans?

- Nope, but the same effect is achieved by comparing the string with `true`

```
let a = 'true';
let b = 'false';
a === 'true';            // true
b === 'true';            // false
// or this right?
console.log(!!'jam'); // => true
```

### Boolean

```
Boolean(null);           // false
Boolean(NaN);            // false
Boolean(0);              // false
Boolean('');             // false
Boolean(false);          // false
Boolean(undefined);      // false
Boolean('abc');          // other values will be true
Boolean(123);            // true
Boolean('true');         // including the string 'true'
Boolean('false');        // but also including the string 'false'!

!!(null);                // false
!!(NaN);                 // false
!!(0);                   // false
!!('');                  // false
!!(false);               // false
!!(undefined);           // false

!!('abc');               // true
!!(123);                 // true
!!('true');              // true
!!('false');             // this is also true! All non-empty strings are truthy in JavaScript
```

## [15. Implicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3d2e392a)

- JS does everyting it can to perform operations, including implicitly converting values that would produce errors in other languages:

```
1 + true       // true is coerced to the number 1, so the result is 2
'4' + 3        // 3 is coerced to the string '3', so the result is '43'
false == 0     // false is coerced to the number 0, so the result is true
```

- This makes debugging rather tricky.
- As a rule, avoid these automatic type conversions.

### The Plus (+) Operator

- Converts a value into a number.
- As below, it is the unary plus operator:

```
+('123')        // 123
+(true)         // 1
+(false)        // 0
+('')           // 0
+(' ')          // 0
+('\n')         // 0
+(null)         // 0
+(undefined)    // NaN
+('a')          // NaN
+('1a')         // NaN
```

- With two operands it is the binary plus operator. Results in either addition or concatenation:

```
'123' + 123     // "123123" -- if a string is present, coerce for string concatenation
123 + '123'     // "123123"
null + 'a'      // "nulla" -- null is coerced to string
'' + true       // "true"
```

- When both operands are a combination of numbers, booleans, `null`s or `undefined`s they are converted to numbers and added together.

```
1 + true        // 2
1 + false       // 1
true + false    // 1
null + false    // 0
null + null     // 0
1 + undefined   // NaN
```

- When one operand is an object, both operands are converted to strings and concatenated together.

```
[1] + 2                     // "12"
[1] + '2'                   // "12"
[1, 2] + 3                  // "1,23"
[] + 5                      // "5"
[] + true                   // "true"
42 + {}                     // "42[object Object]"
(function foo() {}) + 42    // "function foo() {}42"
```

### Other Arithmetic Operators

- All other arithmetic operators (`-`, `*`, `/`, `%`) are only capable of operating on numbers. If you feed them non-numbers, these operands will be converted top numbers.

```
1 - true                // 0
'123' * 3               // 369 -- the string is coerced to a number
'8' - '1'               // 7
-'42'                   // -42
null - 42               // -42
false / true            // 0
true / false            // Infinity
'5' % 2                 // 1
```

### Equality Operators

- Strict equality operators never perform type coercions.

#### Non-strict equality operators

- If both operands are the same type, then non-strict equality operators act exactly the same as strict equality operators.
- THe difference occurs when the operands are of different types. Where a non-strict will implictly convert, using the following rules:

1. String == Number => Number == Number

```
'42' == 42            // true
42 == '42'            // true
42 == 'a'             // false -- becomes 42 == NaN
0 == ''               // true -- becomes 0 == 0
0 == '\n'             // true -- becomes 0 == 0
```

2. Comparisons with booleans turn the boolean into 1 or 0:

```
42 == true            // false -- becomes 42 == 1
0 == false            // true -- becomes 0 == 0
'0' == false          // true -- becomes '0' == 0, then 0 == 0 (two conversions)
'' == false           // true -- becomes '' == 0, then 0 == 0
true == '1'           // true
true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN
```

3. `null` == `undefined` always returns `true`

```
null == undefined      // true
undefined == null      // true
undefined === null     // false -- strict comparison
```

4. `null` == `null` => `true` and `undefined` == `undefined` => `true`

```
null == null           // true
undefined == undefined // true
```

5. Comparing `null` or `undefined` to all other values returns `false`.

```
undefined == false     // false
null == false          // false
undefined == ''        // false
```

6. When one operand is `NaN` the return value is always `false`:

```
NaN == 0              // false
NaN == NaN            // false
NaN === NaN           // false -- even with the strict operator
NaN != NaN            // true -- NaN is the only JavaScript value not equal to itself
```

### Relational Operators

- ie `<`, ,`>`, `<=` and `>=`.
- If both operands are strings JS compares them "lexicographically" ie. letter by letter.
- Otherwise JS converts both to numbers (even `NaN`) before comparing them.

```
11 > '9'              // true -- '9' is coerced to 9
'11' > 9              // true -- '11' is coerced to 11
123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a'            // also false
true > null           // true -- becomes 1 > 0
true > false          // true -- also becomes 1 > 0
null <= false         // true -- becomes 0 <= 0
undefined >= 1        // false -- becomes NaN >= 1
```

### Best Practices

- Always use explicit type coercions.
- Always use strict equality operators (`===` and `!==`) (Not everyone agrees with this)
- This part of JS is generally poorly understood. So be super explicit.
- So the first example is better than the second below:

```
function isOne(value) {
  return value === 1 || value === "1" ;
}

console.log(isOne(1));   // true
console.log(isOne("1")); // true
```

```
function isOne(value) {
  return value === 1;
}

console.log(isOne(1));   // true
console.log(isOne("1")); // false
```

## [16. Practice Problems: Primitive Types and Type Coercion](https://launchschool.com/lessons/7377ece4/assignments/cec504dc)

1.

```
let x = '13';
let y = 9;

console.log(Number(x) + y); // => 22
```

2.

```
let x = '13';
let y = 9;

console.log(x * y); // 117 (Number)
```

3.

```
let npa = 212;
let nxx = 555;
let num = 1212;

console.log(String(npa) + String(nxx) + String(num)); // 2125551212

// LS solution:

npa = '' + npa;
nxx = nxx + '';
num += '';

console.log(npa + nxx + num);  // 2125551212
```

4. I did this in question 3

5.

```
let bool = true;
let arr = [1, 2, 3];

console.log(String(bool)); // => 'true'
console.log(String(arr)); // => '1,2,3'
// LS solution (same output)
console.log(bool.toString());
console.log(arr.toString());
```


## [17. Conditionals](https://launchschool.com/lessons/7377ece4/assignments/5f7c3a20)

- Only 2:
  - `if...else`
  - `switch`
- (but there are `while` and `for` loops)

### if...else

```
let score = 80;

if (score > 70) {
  console.log('Congratulations, you passed!');
}
```

- If there are multiple conditions, only the first condition to evaluate as true executes:

```
if (condition1) {
  // statements
} else if (condition2) {
  // statements
} else if (conditionN) {
  // statements
} else {
  // statements
}
```

- You can nest `if`s

```
if (condition1) {
  if (nestedCondtion) {
    // statements
  } else {
    // statements
  }
} else if (condition2) {
  // statements
}
```

### Truthy and Falsy

- Only 6 possible falsy values:

```
if (false)        // falsy
if (null)         // falsy
if (undefined)    // falsy
if (0)            // falsy
if (NaN)          // falsy
if ('')           // falsy
```

### Switch

- Like `if` statements the program seeks the first truthy statement, the difference being that it prints everything after, until it reaches a `default` clause or `break` statement.
- The excecution "falls through" to the next statements without `break` keywords.

### Comparing Values with NaN

```
let foo = NaN;
console.log(Number.isNaN(foo));      // true

console.log(Number.isNaN('hello'));  // return false since `'hello'` is not NaN
```

## [18. Practice Problems: Operators and Conditionals](https://launchschool.com/lessons/7377ece4/assignments/e8b72278)

1.

```
let apples = 3;
let bananas = 5;

if (apples == bananas) {
console.log('Equal!');
}
```

2.

```
let apples = 3;
let bananas = 3;

if (apples == bananas) {
console.log('Equal!');
}
```

3. No output because strict comparison only returns true when both operands are of the same type as well as value.

```
let apples = 3;
let bananas = "3";

if (apples === bananas) {
console.log('Equal!');
}
```

4.

```

```

5.

```

```

6.

```

```

7.

```

```

8.

```
let apples = 3;
let bananas = undefined;
let eitherOr = apples || bananas;

if (eitherOr) {
  console.log(`eitherOr is "${eitherOr}"`);
} else {
  console.log(`eitherOr is "${eitherOr}"`);
}
```

9.

```

```

10.

```
let familyMessage = "You're part of the family";
let lastName = 'Rodger';
lastName === 'Rodger' ? console.log(familyMessage) : console.log("You're not part of the family");
// You're part of the family
```

## [19. Looping and Iteration](https://launchschool.com/lessons/7377ece4/assignments/a261b334)

- Execute a statement while a condition is true.

### The "while" loop

```
let counter = 0;
let limit = 10;

while (counter < limit) {
  console.log(counter);
  counter += 2;
}
```

### Infinite loops

- Usually a mistake.

### Break and Continue

```
let counter = 0;
let limit = 10;

while (true) {
  counter += 2;
  if (counter > limit) {
    break;
  }

  console.log(counter);
}
```

- `continue` skips the rest of the loop and begins again from the top:

```
let counter = 0;
let limit = 10;

while (true) {
  counter += 2;
  if (counter === 4) {
    continue;
  }

  if (counter > limit) {
    break;
  }

  console.log(counter);
}

2
6
8
10        // NOT 4
```

### The "do...while" loop

- The only difference between `do...while` and `while` loops is that the former must iterate at least once. this is because the `while` condition is evaluated after the loop body is evaluated.

```
let counter = 0;
let limit = 0;

do {
  console.log(counter);
  counter += 1;
} while (counter < limit);
```

### The "for" loop

- The most common loop in JS.
- You put the three elements of a loop in the initial parameters:
  - Set initial state
  - Evaluate a condition
  - make a change before re-evaluating the condition

```
for (initialExpression; condition; incrementExpression) {
  // statements
}
```

```
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
```

- You are encouraged not to use single letter names.
- It is possible to leave out any of the three parameters of a `for` loop. As below:

```
// put initialization outside of the loop

let index = 0;
for (; index < 10; index += 1) {
  console.log(index);
}
```

```
// manually check condition and break out of the loop
// If you omit the condition component in the "for", JavaScript assumes true

for (let index = 0; ; index += 1) {
  if (index >= 10) {
    break;
  }

  console.log(index);
}
```

```
// manually increment the iterator

for (let index = 0; index < 10; ) {
  console.log(index);
  index += 1;
}
```


## [20. Exercises](https://launchschool.com/lessons/7377ece4/assignments/693cc885)

- First 6 of [JS basics](https://launchschool.com/exercise_sets/c39a2eed)

1. Building Strings

```
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
```

- This does cause a bug to be raised. JS doesn't like the line breaks because of the trailing white spaces, which seperate the new line from the `\`s. The below runs fine:

```
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

console.log(paragraph);
```

2. Conditionals pt1

```
const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // Hello
}

if (!myString) {
  console.log('World');  // 
}

if (!!myArray) {
  console.log('World'); // World
}

if (myOtherString || myArray) {
  console.log('!'); // !
}
```

3. Conditionals pt 2 ( LS solution shows only 5 execution paths .. ?)

```
let condition1 = 0;
let condition2 = '2';
let condition3 = '3';
let condition4 = '4';
let condition5 = '5';
let condition6 = '6';
let condition7 = '7';


if (condition1) {
  console.log('Unique execution path 1');
  if (condition2) {
    console.log('Unique execution path 2');
  } else {
    console.log('Unique execution path 3');
  }
} else {
  if (condition4) {
    console.log('Unique execution path 4');
    if (condition5) {
      console.log('Unique execution path 5');
    }
    console.log('Unique execution path 6');
  }
  console.log('Unique execution path 7');
}
```

4. String Assignment

```
const myName = 'Bob';
const saveName = myName;
myName.toUpperCase(); // BOB, but this isn't saved anywhere
console.log(myName, saveName); // Bob, Bob
```

5. Arithmetic Integer

```

```

6. Counting the Number of Chars

```
const readlineSync = require("readline-sync");

console.log("Please enter a phrase:");
let input1 = readlineSync.prompt();
console.log(`There are ${input1.length} characters in "${input1}"`)

// LS solution:
 
const input = prompt('Please enter a phrase:'); // this doesn't work ... why?
const numberOfCharacters = String(input.length);

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);
```

## [Quiz](https://launchschool.com/lessons/7377ece4/assignments/fd281ca8)

10/12 (83%)

### 2nd attempt (1.6.24)

6/12 (50%)

 1. A, B YES
 2. A, B AND D, the following works, it just ignores the console.log:

```
<script src="my-javascript.js">
  console.log('Hello, World!');
</script>
```

 3. A, D YES
 4. A, B, C, D NO - all primitive values cannot be said to have a smaller size in memory than compound values, although most do. Large strings for example are primitive, but would obviously dwarf an empty array. And yes, `NaN` is a primitve value.
 5. A. There is also an expresson. ANYTHING TO THE RIGHT OF `=` IS AN EXPRESSION.
 6. C yes
 7. B yes
 8. B yes
 9. C NO - A, because when comparing a string and a number, JS coerces the string to a number regardless of whether the string contains number characters. Even if the result is `NaN`
 10. D NO - C
 11. B, D NO, not D, the `++` operator is not the key difference.
 12. D YES
