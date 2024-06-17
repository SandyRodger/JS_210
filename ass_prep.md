# Assessment

|  | 1st: John the Baptist | 2nd: deep-dive | 3rd: find/fill gaps |
| :--- | :---: | :---: | :---: | 
| L1 | 25.4.24 | 29.4.24 |
| L2 | 29.4.24 | 1.5.24 |
| L3 | 1.5.24 | 4.5.24 |
| L4 | 4.5.24 |
| L5 ||21.5.24|
| L6 |21.5.24| 23.5.24 |

## [study guide](https://github.com/SandyRodger/JS_210/blob/main/assessment_study_guide.md)

### specific topics of interest:

- "some of the bullet points are super broad" - Mattic.

You should be able to clearly explain the following topics:

## assignments and comparison

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

## variable scope, especially how variables interact with function definitions and blocks

- A variable's scope is the part of the program that has access to the variable by name.
- Every function or block creates a new scope for variables.
- Unlike Ruby, variables declared in the global sope do not have to be passed into Javascript functions.
- Block scope:
  - variables declared inside blocks are not visible outside, but variables declared outside blocks are visible inside.
- Programs have a hierarchy of scopes, which means you can shadow/hide variables in higher scopes, because JS will return the first variable it finds that matches the name.

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

## To do before assessment:

|  | complete | 2nd | 3rd |
| :--- | :---: | :---: | :---: | 
| "Build your own study guide in your own words" (Have written answers for all "specific topics of interest") |
| Go through JS210 for a third time looking for gaps |
| Find more problems to solve (Mattic?) / mock tests |
| Attend at least 1 SPOT session|
| sift through Discussion pages for all 6 lessons.|
| Re-do all the quizes twice. |

## Mattic advice:

- Build your own study guide in your own words
- Practice terminology (phase 2)
- (Phase 3) Go through official solutions and make sure it's fresh in your memory, ESPECIALLY TEST-CASES. "Something a bit funky from the exercises". Then paste in the concept from your list of concepts.
- There will be trick-questions, testing for edge functinality.
- synthesis / describe in your own words - very important.

### on forgetting early courses

- front end it's not a problem.
- For back-end... conceptually, things are still here.

