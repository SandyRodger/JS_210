# [Writing better code](https://launchschool.com/lessons/d299fc36/assignments)

## [1	Douglas Crockford Lecture: The JavaScript Programming Language](https://launchschool.com/lessons/d299fc36/assignments/35c559d0)

### Number

- `Number` : in JS there's only one type (as opposed to many other languages). Thus you can avoid the problems that come from choosing the wrong type of number.
- "Once something stupid gets in, it takes a long long time to get it out"
- Problem with numbers: the associative log does not hold. ie they don't behave exactly like real life numbers.
  - Generally integers under 9 quadrillion are ok.
  - Decimal fractions are approximate. This is the most reported bug in the Mozilla database. It's particularly important when adding money.
- All numbers extend from `Number.prototype`.
- Be careful when writing your own methods on prototype - you may be competing with native methods or other libraries.
- Numbers are first class objects. They are containers and do not need to be wrapped into containers.
### Math Object

  - `NaN` which is in fact a `Number`. "It is toxic" ( Nan + 1 = Nan ). NaN is not equal to NaN.

### Boolean
### String

- Why are they called string? No one knows.
- 16-bit Unicode
- Multiline string literals. `\` at the end of the line. But don't do this, because it looks like a bug.
- `.trim` is nice.

### Array

- The fastest of all data-structures. Javascript doesn't have this, what it has is an Object acting like an Array.
- Array.length is always one greater than the highest index number , which isn't actually the length.
- Don't us `for... in` with Arrays because it doesn't guarantee the order of the array.
- `delete myArray[1]` => `['a', undefined, 'c', 'd']` , so `.splice()` is better.

### parseInt

- The radix should always be used, to avoid JS thinking you're in the wrong base-number. `parseInt("08") === 0` , `parseInt("08"), 10) === 8`
- It stops at the first non-digit and returns what it has up to then: `parseInt("12em") === 12`

### Date

### RegEx

- For complicated stuff, it is very unwieldy. Hard to test, hard to read.
- "if it's more than 2 inches, rethink it"

### Functions

- [01:09]

### null

- [01:09:20]

### undefined

- [01:09:50]
- You can define a value as undefined.

### typeof

- Exceptions are array and null,  which are called objects. Everything else is 1:1.


### Other 

- JS is loosely typed. That means any data type can be stored in any variable of any type.
- JS is pass by reference, which means it's almost never copied.
- JS is a member of the C family of programming languages.
- Don't forget to use `new` on a constructor function. This is why constructor functions begin with capital letters (?)
- Standard says don't star vars with $, but some people do.
- Avoid /* comments, because some RegExs use that.
- `+` is for concatenation and additon, which can cause mistakes.
- `+` prefix to ensure string numbers are numbers.
- Transitivity doesn not hold, because comparing some things left to right get a different result when compared right to left.
- `&&` : "If the first operand is truthy, the return value is the second operand otherwise it is the first operand.
- `throw` statement for exceptions.
- `try` statements [01:27]
- `with` statements. [01:29] Don't use this. There's no code that you can't write better without it. Same for `eval`.
- 

## [2	Douglas Crockford Lecture: JavaScript the Good Parts](https://launchschool.com/lessons/d299fc36/assignments/51454fa6)

- "The most important language in the world"
- Bad parts:
  - global variables
  - adds an concatenates
  - Semicolon insertion
  - `typeof`
  - `with` and `eval`
  - phony arrays
  - `==` and `!=`
  - `false`, `null` `undefined` and `NaN`.
- Sometimes switch statement fallthrough is in fact desired. But it looks like a bug, and so to be avoided.
- Good parts:
  - Lambda
  - Dynamic objects
  - loose typing
  - object literals
- Inheritance
  - Two schools:
    - prototypal
      - class-free
      - Delegation: invisible link between new and old objects.
    - classical
- Closure [27:00]
- Singleton [28:00]
- [31:00] Style isn't subjective
- [35:30] working with the grain.
  - "the standard" ?
- [37:05] A Personal Journal
  - [40:00] "The scheme epiphany" ?
  - How he made JSON a world standard.
  - "top down operator precedence" ?
  - Javascript parser. => JSLint [42:00]
- [42:00] JSLint
  - Do everything it says.
- Unlearning is really hard. `perfectly fine == faulty` .
- [48:44] what strict-mode is and why it exists.
- [52:00] Q&A:
  - Does strict-mode change behaviour or just take things out?
    - Changes beahviour.
  - Projects to fix the DOM problem

## [3	JavaScript Style Guide](https://launchschool.com/lessons/d299fc36/assignments/1eb78465)

- 

### Further reading

### Problems

#### [AirBnB styleguide](https://github.com/airbnb/javascript?tab=readme-ov-file#comparison-operators--equality)

1. `let title = "The Three-Body Problem";`
  - 6.1 Use single quotes for all strings
  - Maybe 2.1 : use `const` for all references.
  - technically unused variable.

2. 3.2: use one `let` or `consts` per assignment, also camel case for page_count.

```
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
```

3. `let completed = lastPageRead == 400;`

- 15.1: Use strict equality operator

4. use curly braces to create a multi-line block with an if statement. SO it would be good all on one line like this, otherwise you need the braces.

```
if (finishedBook())
  console.log('You have finished reading this book');
```

5.

- too far indented
- `+`, `=` and `<` operators needs spaces on each side.
- Explicit string coercion:
  - `let message = 'You read page ' + String(page)`
- Avoid `++` and `--`
- Use named function expressions, instead of function declarations.
  - `let read = function read(pages) {`

```
function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page++) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);
```

### [ESLint](https://launchschool.com/gists/9ad96eed)
#### Linting and Best Practice
#### Installing and configuring ESLint

- `npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev`
- `npx eslint -v`

#### Configuring ESLint
#### Quick tutorial

- `npx eslint hello.js`
- `npx eslint --fix hello.js`

## [4	Strict Mode](https://launchschool.com/lessons/d299fc36/assignments/80093cbe)

- `this` ? 

### What to focus on
### What does Strict mode do?

- Takes away some silent errors, by raising exceptions.
- Prevents some code that stops JS optimizing.
- Forbids names/syntax that clashes with future JS versions.

### Enabling Strict mode

- `"use strict";`
- This is a **pragma**.
- Must be written at the beginning of the file or function.
- It is lexically scoped.

#### Implicit global variables

- In strict mode the following is not allowed: `a = 10` without `let` or `const`.
  
#### Implicit context in functions

- 

#### Forgetting to us `this`

- skip for now

#### Leading zeroes

- without strict mode, the following is interpreted as an octal number: `console.log(01234567); // 342391 (the same as octal 0o1234567)`

#### Other differences

- 

### When should I use Strict mode

- In all new code
- If you're adding functions to an old codebase, use function level strict mode.

### Practice Problem

```
//npx eslint 01_strict_mode_exercise.js
"use strict";

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
  "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  let allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());
```

## [5	Syntactic Sugar](https://launchschool.com/lessons/d299fc36/assignments/5d14905d)

### What to focus on
### Concise Property initializers

- If you're initializing an object where the keys and properties have the same name, do it like this:

```
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}
```

### Concise methods

- Leave out `: function` when defining methods:

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

### Object Destructuring

- The following can be written by the block after:

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

```
let { foo, bar, qux } = obj; //order can be changed
```

or:

```
let { qux: myQux, foo, bar } = obj; //which creates a variable called myQux with a value of `obj.qux`
```

or

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

### Array Destructuring

```
let foo = [1, 2, 3];
let [ first, second, third ] = foo;
```

or

```
let bar = [1, 2, 3, 4, 5, 6, 7];
let [ first, , , fourth, fifth, , seventh ] = bar;
```

```
let one = 1;
let two = 2;
let three = 3;

let [ num1, num2, num3 ] =  [one, two, three];

console.log(num1);   // 1
console.log(num2);   // 2
console.log(num3);   // 3
```

or with rest syntax

```
let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar);   // 1
console.log(qux);   // [2, 3, 4]
```
### Spread Syntax

- V1:

```
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo = [3, 7, 11];
add3(foo[0], foo[1], foo[2]); // => 21
```

- V2

```
add3.apply(null, foo); // => 21
```

- V3

```
add3(...foo); // => 21
```

- Common uses for spread syntax:

```
// Create a clone of an array
let foo = [1, 2, 3];
let bar = [...foo];
console.log(bar);         // [1, 2, 3]
console.log(foo === bar); // false -- bar is a new array
```

```
// Concatenate arrays
let foo = [1, 2, 3];
let bar = [4, 5, 6];
let qux = [...foo, ...bar];
qux;  // => [1, 2, 3, 4, 5, 6]
```

```
// Insert an array into another array
let foo = [1, 2, 3]
let bar = [...foo, 4, 5, 6, ...foo];
bar; // => [1, 2, 3, 4, 5, 6, 1, 2, 3]
```

```
// Create a clone of an object
let foo = { qux: 1, baz: 2 };
let bar = { ...foo };
console.log(bar);         // { qux: 1, baz: 2 }
console.log(foo === bar); // false -- bar is a new object
```

```
// Merge objects
let foo = { qux: 1, baz: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
obj;  // => { qux: 1, baz: 3, sup: 4 }
```

- bear in mind that spread syntax with Objects copies the values returned by Object.keys. SO it does not take inherited properties or the object prototype.

### Rest Syntax

- The opposite of spread syntax.

```
let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
let { bar, baz, ...otherStuff } = foo;
console.log(bar);        // 1
console.log(baz);        // 3
console.log(otherStuff); // {qux: 2, xyz: 4}
```

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

### Summary


## [6	Practice Problems: Syntactic Sugar](https://launchschool.com/lessons/d299fc36/assignments/edf2a832)

1.

```
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

console.log(foo(1, 2, 3));
```

2.

```
function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

foo().bar()
foo().qux(12)
foo().baz(12, 13)
```

3.

```
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let baz = obj.baz
let qux = obj.qux
let bar = obj.bar
```

4.

```
function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);

let bar = result[0];
let qux = result[1];
let baz = result[2];
```

5.

6.

7.

8.

9.

10.

```
function sugar(first, a2, a3, a4, last) {
  return {
    first,
    last,
    middle: [a2, a3, a4],
  }
}

let arr = [1, 2, 3, 4, 5]
let {first, last, middle} = sugar(...arr);

console.log(first);
console.log(last);
console.log(middle);
```

## [7	Errors](https://launchschool.com/lessons/d299fc36/assignments/d52565cc)

### Terminology
### ReferenceError
### TypeError
### SyntaxError

## [8	Preventing Errors](https://launchschool.com/lessons/d299fc36/assignments/0e4231b6)

### Guard clause
### When to use guard clauses

- When a function can't trust that its arguments are valid.

### Detecting Edge cases



### Planning your code

- try to think of the most common use cases.
- It's OTT to check valid data in every function though.

## [9	Catching Errors](https://launchschool.com/lessons/d299fc36/assignments/748ab030)

- Errors are not entirely avoidable.

```
try {
  // Do something that might fail here and throw an Error.
} catch (error) {
  // This code only runs if something in the try clause throws an Error.
  // "error" contains the Error object.
} finally { // this clause can be omitted
  // This code always runs, no matter if the above code throws an Error or not.
}
```

```
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an Error if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an Error
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null
```
### When to use try/catch

- Only if:
  - A built in JS method can throw and error 
                    AND
  - A simply guard clause is impossible/impractical.

### Further reading

- not now

## [10	Exercises: JavaScript Language Fundamentals](https://launchschool.com/lessons/d299fc36/assignments/1b25bab1)

- [9 debugging](https://launchschool.com/exercise_sets/cefefb80?track=ruby)
- 

## [11	Course Feedback](https://launchschool.com/lessons/d299fc36/assignments/83f5c6d7)
