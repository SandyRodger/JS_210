# [Arrays](https://launchschool.com/lessons/e15c92bb/home)

## [1	Arrays](https://launchschool.com/lessons/e15c92bb/assignments/20dcbcab)

- You can create them with an Array literal syntax. (Literal in this context means descibing the object, rather than using a constructor function to build it).

```
[]         // an empty Array

[0, 1, 2]  // an Array holding three values

[42, 'hello', false, [3, 5], [true, 'hello']]  // Arrays can contain any other object
```

- The alternative to literal syntax is with the array constructor:

```
let count = new Array(1, 2, 3);

// Usually written as:
let count = [1, 2, 3];
```

### Iterating Through an Array

- The first of the two most common interactions with an array.
  - `for` loops
    - bracket notation is an operator not a method (unlike Ruby).

### Accessing, Modifying, and Detecting Values

- The second of the two most common interactions with an array.
- You can add elements like this:

```
let count = [1, 2, 3];
count[3] = 4;
count;            // [ 1, 2, 3, 4 ]
count.length;     // 4
```

- (I know this from the book)

```
let count = [1, 2, 3];

count.length = 10;
count;            // [ 1, 2, 3, empty x 7 ]
count.length = 2;
count;            // [ 1, 2 ]; excess elements are lost
```


### Arrays are Objects

```
Array.isArray([]);        // true
Array.isArray('array');   // false
```

## [2	Practice Problems: Arrays](https://launchschool.com/lessons/e15c92bb/assignments/8abbb2d4)

- tick

## [3	Array Operations: push, pop, shift, and unshift](https://launchschool.com/lessons/e15c92bb/assignments/742c1bad)

- JS has an `Array` "global object", which in turn has a "prototype object", which is what defines the methods for arrays.

- tick

## [4	Array Operations: indexOf and lastIndexOf](https://launchschool.com/lessons/e15c92bb/assignments/1bf4f26b)

1.
2.

## [5	Array Operations: slice, splice, concat, and join](https://launchschool.com/lessons/e15c92bb/assignments/21fd1560)
1.
2.
3.
4.

## [6	Array Methods](https://launchschool.com/lessons/e15c92bb/assignments/ce328e32)


## [7	Arrays and Operators](https://launchschool.com/lessons/e15c92bb/assignments/5aed9f6f)

### Arithmetic Operators
### Comparison Operators

## [8	Practice Problem: Comparing Arrays](https://launchschool.com/lessons/e15c92bb/assignments/a52dfe90)

## [9	Practice Problems: Basic Array Uses](https://launchschool.com/lessons/e15c92bb/assignments/c21ca1b1)

## [10 Practice Problems: Intermediate Array Uses](https://launchschool.com/lessons/e15c92bb/assignments/ad590a6a)

## [11 Practice Problems: Find Missing Numbers](https://launchschool.com/lessons/e15c92bb/assignments/c52e7b69)

## [12 More Exercises](https://launchschool.com/lessons/e15c92bb/assignments/c25939c3)

- all 10 [array](https://launchschool.com/exercise_sets/75d23811) exercises.

## [13 Quiz](https://launchschool.com/lessons/e15c92bb/assignments/245c864a)

- First attempt: 4/6
- Second attempt:

1. A - tick
2. A, B, C, D - not D!
  - because although it can return the first value - BRACKET NOTATION IS NOT AN OPERATOR
3. B, C - tick
4. D - tick
5. D - tick
6. A, - no, C:
  - A is true, but doesn't completely describe it.
  - C - I forgot that arrays are zero-based, so the first position is indeed even.


