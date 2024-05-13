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
### Methods
### Capitalization
## [2	Object Properties](https://launchschool.com/lessons/79b41804/assignments/5564f6e8)
### Property Names and Values
### Accessing Property Values
### Adding and Updating Properties
## [3	Stepping through Object Properties](https://launchschool.com/lessons/79b41804/assignments/b88f5906)
### Further Reading
## [4	Practice Problems: Working with Object Properties](https://launchschool.com/lessons/79b41804/assignments/3793abca)
1.
2.
3.
4.
## [5	Arrays and Objects](https://launchschool.com/lessons/79b41804/assignments/5dc08268)
### Arrays are Objects
### Arrays and the Length Property
### Using Object Operations with Arrays
## [6	Arrays: What is an Element?](https://launchschool.com/lessons/79b41804/assignments/153a803b)
### Array Keys
### Sparse Arrays
## [7	Mutability of Values and Objects](https://launchschool.com/lessons/79b41804/assignments/40b5852e)
### Review: Nested Data Structures
## [8	Pure Functions and Side Effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5)
### Side effects
### Mixing Side Effects and Return Values
### Pure Functions
### Practice Problems
1.
2.
## [9	Working with the Math Object](https://launchschool.com/lessons/79b41804/assignments/00b61bb2)
1.
2.
3.
4.
5.
6.
## [10	Working with Dates](https://launchschool.com/lessons/79b41804/assignments/a2584ce1)
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
## [11	Working with Function Arguments](https://launchschool.com/lessons/79b41804/assignments/55096c15)
### The Traditional Approach
### The Modern Approach
## [12	Practice Problem: Welcome Stranger](https://launchschool.com/lessons/79b41804/assignments/0253c010)

## [13	Practice Problem: Repeated Characters](https://launchschool.com/lessons/79b41804/assignments/3e1e13df)

## [14	More Exercises](https://launchschool.com/lessons/79b41804/assignments/0bc5138c)

- JS basics (last 4)
- Medium 1
- Medium 2
- Easy 3
- Easy 4
- Easy 5
## [15	Quiz](https://launchschool.com/lessons/79b41804/assignments/dbf1b1a1)
