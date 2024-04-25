# JavaScript Basics

## About This Course
## JavaScript Versions
## Resources
## Running your Code
## Code Style
## Data Types

### Number
### Boolean
### String
### Capitalization

## More on Strings

### Special Characters
### String Concatenaton
### Character Access
### String Length
### Working with Long Strings
### JavaScript's Built-in String Methods

## Primitive Values are Immutable

## Variables

### Naming Variables

### Declaring Variables

### Variable Assignment and Initializers

### Dynamic Typing

## Operators

### Arithmetic Operators

### Assignment Operators

### Comparison operators

### String Operators

### Logical Operators

## [Expressions and Statements](https://launchschool.com/lessons/7377ece4/assignments/d84fdace)

### Expressions

- Any valid code that resolves to a value.

### Operator Precedence

### Increment and Decrement Operators in Expressions

### Logical Short Circuit Evaluation in Expressions

### Statements


## Input and Output

### Using prompt() to Ger User's Input

- pops up a dialogue box with optional message in the browser
- User input is always captured as string.

### Using alert() to Display a Message to the User

```
alert('Hello, world');
alert()
```

### Logging Debugging Messages to the JavaScript Console

## Practice Problems - Variables and Numbers

1.

```

```

2.



```

```

3.

```

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

```

9.

```

```

10.


```

```



## [Explicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3899592c)

### Converting Strings to  Numbers

### Converting Numbers into Strings

### Booleans to Strings

### Primitives to Booleans?

- Nope, but the same effect is achieved by comparing the string with `true`

```
let a = 'true';
let b = 'false';
a === 'true';            // true
b === 'true';            // false
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
```

## [Implicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3d2e392a)

### The Plus (+) Operator

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

### Other Arithmetic Operators

### Equality Operators

### Relational Operators

### Best Practices


## [Practice Problems: Primitive Types and Type Coercion](https://launchschool.com/lessons/7377ece4/assignments/cec504dc)

1.

```

```

2.



```

```

3.

```

```

4.

```

```

5.

```

```


## Conditionals

### if...switch

### Thuthy and Falsy

### Switch

### Comparing Values with NaN

## Practice Problems: Operators and Conditionals

1.

```

```

2.



```

```

3.

```

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

```

9.

```

```

10.


```

```

## [Looping and Iteration](https://launchschool.com/lessons/7377ece4/assignments/a261b334)

### The "while" loop

### Infinite loops

### Break and Continue

### The "do...while" loop

### The "for" loop

## Exercises

- First 6 of [JS basics](https://launchschool.com/exercise_sets/c39a2eed)
- 
## [Quiz](https://launchschool.com/lessons/7377ece4/assignments/fd281ca8)


