# Practice Problems: Logic and Flow


## [1	Chrome Developer Tools](https://launchschool.com/lessons/c26a6fcc/assignments/2fdae756)

### Video

- [06:45] command + r to reload page in chrome
- [10:50] "Step through code"
  - Execute whatever you have highlighted on the screen, but pause before you move on to the next thing (How is this different? - the first one is play the code until you  meet a break, the second is just do the next tiny step))
- [12:50] "Step Into" : moves the debugger into the function so you can have a rummage.
- [13:50] Alternatively add debuggers by writing `debugger;` into your javascript file. (Only active if dev tools is open) Don't have it there when you ship your code.
- [15:40] The js file in Sources is in the global scope and can therefore be used in the chrome console - BUT it will exist with the scope of wherever you've breaked your program.
- [17:30] debug only when there's an exception: Breakpoints > 'Pause on uncaught exceptions' (

### Further Reading

- Not for the moment thank you

## [2	JavaScript Coding Styles](https://launchschool.com/lessons/c26a6fcc/assignments/272f9d57)

- In the real world teams have style guides
- They have 2 types of rules:
  - Formatting/aesthetic:
    - Indentation
    - Spacing
    - Single v double quotes
    - Readability
  - Best practice
    - type coercions
    - variable definition & hoisting rules
- LS recommends [AirBnB JS styleguide](https://github.com/airbnb/javascript).
- Consistency is key.

### Spacing

- tabs for 2 spaces
- One space before block: `function test() {`
- Space after `if` : `if (isJedi) {`
- Operators with spaces before and after: `let x = y + 5;`
- No spaces inside parentheses: `let bar = function(foo) {`
- Unary special character operators must not have spaces between them and the operand: `index++;`
- No space before `,` and `;`: `func(a, b);`
- No whitespace at the end of lines, or on blank lines.
- `?` in ternary operator needs a space on each side
- Ternarys should be one line and not nested

### Blocks

- Leave a blank line between blocks and the next statement.
- Don't pad the blocks with blank lines inside the braces.
- Use braces with all multi line blocks:

```
// bad
function foo() { return false; }
```

- `} else {` for `if` statements.

### Semi-colons

- After every statement,
  - unless it ends with a block.
    - Unless that block is a function expression

### Naming conventions

- Camel case for variable and function names
- Screaming snake case for consts: `const WHATS_UP_DOC = "What's up, Doc?";`
- Imported function names can be saved to camelCast consts: `const WHATS_UP_DOC = "What's up, Doc?";`

### Strings

- single quotes
- explicit coercion: `String(null);`

### Numbers

- `Number` for type casting
- `parseInt` with a radix(?) for parsing strings:

```
let val = Number(inputValue);
let val = parseInt(inputValue, 10);
```

### Booleans

```
let hasAge = Boolean(age);
let hasAge = !!age;
```

### Variable Declarations

- `let` and `const` over `var`.
- Declare variables as close to their first use as possible.
- If you do use `var` delare it at the top of the scope
- `const` if the var will never be reassigned. If it might get mutated later, then it's up to you (but be consistent).

### Functions

- Never declare a function in a non-function block (like `if` or `while`).
- Never name a parameter `arguments` because every function automatically has a `arguments` object attached and you will shadow it.
- Use arrow functions for function expressions used as call-backs.

## CHECK IN

- At this point I feel like I need to study:
  - expressions v declarations
  - Function syntax (especially arrow functions)

## [3	Odd Numbers](https://launchschool.com/lessons/c26a6fcc/assignments/a31baf27)

```

```

## [4	Multiples of 3 and 5](https://launchschool.com/lessons/c26a6fcc/assignments/c778f491)
## [5	Print Multiples](https://launchschool.com/lessons/c26a6fcc/assignments/4258ed28)
## [6	FizzBuzz](https://launchschool.com/lessons/c26a6fcc/assignments/3fdc2a52)
## [7	Prime Check](https://launchschool.com/lessons/c26a6fcc/assignments/7889d322)
## [8	XOR](https://launchschool.com/lessons/c26a6fcc/assignments/bbd0a58c)
## [9	Guessing the Password](https://launchschool.com/lessons/c26a6fcc/assignments/9754deb9)
## [10	Student Grade](https://launchschool.com/lessons/c26a6fcc/assignments/e25d11ee)
## [11	Greatest Common Divisor](https://launchschool.com/lessons/c26a6fcc/assignments/ecedac0a)
## [12	Goldbach Numbers](https://launchschool.com/lessons/c26a6fcc/assignments/4981d6d8)
## [13	Pattern Generation](https://launchschool.com/lessons/c26a6fcc/assignments/e7f469ac)
## [14	Index of Substring](https://launchschool.com/lessons/c26a6fcc/assignments/4e531b61)
## [15	Trimming Spaces](https://launchschool.com/lessons/c26a6fcc/assignments/06e4233a)
## [16	Splitting a String](https://launchschool.com/lessons/c26a6fcc/assignments/fabf4a46)
## [17	Repeating Strings](https://launchschool.com/lessons/c26a6fcc/assignments/eb3eabea)
## [18	String StartsWith](https://launchschool.com/lessons/c26a6fcc/assignments/b818db3f)
## [19	Converting Strings to Lower Case](https://launchschool.com/lessons/c26a6fcc/assignments/7a0c1db0)
## [20	Substring (1)](https://launchschool.com/lessons/c26a6fcc/assignments/7d2c6cf9)
## [21	Substring (2)](https://launchschool.com/lessons/c26a6fcc/assignments/93954da6)
## [22	Code Review: Rot13 Cipher](https://launchschool.com/lessons/c26a6fcc/assignments/c91b43bb)
## [23	Reference Solution: Rot13 Cipher](https://launchschool.com/lessons/c26a6fcc/assignments/5010b557)
## [24	More Exercises](https://launchschool.com/lessons/c26a6fcc/assignments/5bbfb8ea)
