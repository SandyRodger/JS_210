# [study guide](https://launchschool.com/lessons/56ad2094/assignments/2ec8fa4d)

## 1. assignments and comparison

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



## 3. Function scope
## 4. hoisting
## 5. primitive values, types and type conversions/coercions
## 6. object properties and mutation
## 7. understand the differences between loose and strict equality
## 8. how passing an argument into a function may or may not permanently change the value that a variable contains or points to
## 9. working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.
## 10. understand that arrays are objects, and be able to determine whether you have an Array
## 11. variables as pointers
## 12. console.log vs return
## 13. truthiness: false and true vs. falsy and truthy
## 14. function definition and function invocation
## 15. function declarations, function expressions, and arrow functions
## 16. implicit return value of function invocations
## 17. first-class functions
## 18. partial function application
## 19. AND closures (says Mattic)
## 20. side effects
## 21. naming conventions (legal vs idiomatic)
## 22. pure functions and side effects (overlap with above ?)
## 23. strict mode vs. sloppy mode
## 24. JavaScript syntactic sugar
