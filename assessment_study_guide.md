# [study guide](https://launchschool.com/lessons/56ad2094/assignments/2ec8fa4d)

## assignments and comparison

- In JS assignment is achieved with the `=` operator. This is distinct from declaring a variable using the `let`, `const` and `var` keywords, with which it is often combined.
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

## variable scope, especially how variables interact with function definitions and blocks



## function scope
## hoisting
## primitive values, types and type conversions/coercions
## object properties and mutation
## understand the differences between loose and strict equality
## how passing an argument into a function may or may not permanently change the value that a variable contains or points to
## working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.
## understand that arrays are objects, and be able to determine whether you have an Array
## variables as pointers
## console.log vs return
## truthiness: false and true vs. falsy and truthy
## function definition and function invocation
## function declarations, function expressions, and arrow functions
## implicit return value of function invocations
## first-class functions
## partial function application
## AND closures (says Mattic)
## side effects
## naming conventions (legal vs idiomatic)
## pure functions and side effects (overlap with above ?)
## strict mode vs. sloppy mode
## JavaScript syntactic sugar
