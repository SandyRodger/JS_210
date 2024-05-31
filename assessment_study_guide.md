# [study guide](https://launchschool.com/lessons/56ad2094/assignments/2ec8fa4d)

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

- Links:
  - [L2: function scope](https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7)

- My summary:
  - functions create their own local scope
  - The code within a function can access all variables in all surrounding scopes. (Japanese toilets) Even nested.
  - Variables declared inside a function have function scope and cannot be accessed outside the body of the function.
- Launch School examples:
- My examples:

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

## 5. primitive values, types and type conversions/coercions

- This seems like something I understand. I guess I don't have to memorize every combination of what implicitly converts what. But I should have tables to hand.

## 6. object properties and mutation

- Sure, easy. compound objects and all that. 

## 7. understand the differences between loose and strict equality

- right, it's either value is the same or value and type is the same, no?

## 8. how passing an argument into a function may or may not permanently change the value that a variable contains or points to

- That would be a side-effect. It depends largely on whether the argument passed in points to a compound object or primitive value.

## 9. working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (forEach, map, filter, and find) and how to use Object methods to access the keys and values in an Object as an Array.

- OK, I'll have to find a butt-load of problems for `forEach` `map` `filter` and `find`

## 10. understand that arrays are objects, and be able to determine whether you have an Array

- `isArray` is the obvious choice. If that's not on the table then `typeof`. What else do you want?

## 11. variables as pointers

- Same as Ruby stuff, no ? 

## 12. console.log vs return

- fuck, are you retarded? This is obvious

## 13. truthiness: false and true vs. falsy and truthy

- Yeah, I'm not a fucking idiot. Move along.

## 14. function definition and function invocation

- Jesus christ, am I in coding for 6 year olds?

## 15. function declarations, function expressions, and arrow functions

- This syntax I should brush up on, because it's bollocks.

## 16. implicit return value of function invocations

- undefined, unless you `return` that shit.

## 17. first-class functions

- What? 

## 18. partial function application

- ...What ?

## 19. AND closures (says Mattic)

- OK< yep

## 20. side effects

-Fine, I'll make a list

## 21. naming conventions (legal vs idiomatic)

- sure, I'll brush up on this boring assed-shit.

## 22. pure functions and side effects (overlap with above ?)

- OK, looks interesting

## 23. strict mode vs. sloppy mode

Hmmmmmmm, yep. In theory.

## 24. JavaScript syntactic sugar

- Show me that shit one more time plaize.
