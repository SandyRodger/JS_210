## [Assessment](https://launchschool.com/exams/d94f5e76#qna)

### 3 (1/3)

Identify 3 ways that JavaScript's sloppy mode can lead to silent errors -- bugs that don't cause an immediate error -- that will not occur in strict mode.

Your Answer

Sloppy mode allows the program to continue after silent errors without raising exceptions. Strict mode raises exceptions to these.
Strict mode prevents some code that stops JS from optimising.
Sloppy mode allows names and syntax that could cause errors in future Javascript versions.
Responses


Brandi Seeley (TA)
about 5 hours ago
This isn't quite precise enough. Can you identify three concrete examples of said errors that don't throw errors in sloppy mode but do throw errors in strict mode?

### 6

Consider the following code:

```javascript
let greeting = 'Hi';

function greet(name) {
  return `${greeting}, ${name}.`;
}

greeting = 'Hello';
console.log(greet('Jackie'));
```

What does line 8 log to the console? Explain why it displays the results it does. Be sure to identify the underlying principle that this code illustrates.

Your Answer

In line 1 a variable is declared with let and assigned to the string 'Hi'. In lines 3 to 5 the function greet() is defined. Then in line 7 greeting is reassigned to the string Hello. This demonstrates that Javascript is a dynamically typed language, meaning a variable can refer to a value of any data type and can be reassigned without throwing an exception (with the exception of const declared variables).

So by the invocation of greet() on line 8 greeting has been reassigned to the string Hello and prints Hello, Jackie..
Responses


Brandi Seeley (TA)
about 5 hours ago
This demonstrates that Javascript is a dynamically typed language, meaning a variable can refer to a value of any data type and can be reassigned without throwing an exception (with the exception of const declared variables).

This isn't the correct concept. Can you try again to identify the concept that explains why greet utilizes the string 'Hello' instead of 'Hi', even though greeting referenced 'Hi' when greet was defined?

### 10

Read the following code carefully. How many variables are in the global scope, and how many are local to the scope inside function greet? List them all. Assume that strict mode is not in use.

```javascript
let foo = 42;
let bar = 43;

function greet(name) {
  greeting = 'Hello';
  return greeting + ' ' + name;
}

greet('Pete');
```

Your Answer

Global scope:

foo
bar
greet
Local scope:

name
greeting
Responses


Brandi Seeley (TA)
about 5 hours ago
One of your variables is misplaced in this answer. Can you try again?

### 11

What does the following code log? Explain how you came up with your answer.

```javascript
let counter = 0;

function incrementCounter() {
  counter = counter + 1;
}
```

incrementCounter();
console.log(counter);
Your Answer

When incrementCounter() is called in line 7 no arguments are passed in, but the function still has access to the counter variable because of variable scoping rules. These mean that variables declared outside a function are visible within the function even if they are not passed in. So counter is assigned to 0 on line 1, then in line 7 the incrementCounter() method mutates the counter variable reassigning it to the return value of counter +1. So by line 8 counter is assigned to the number 1.
Responses


Brandi Seeley (TA)
about 5 hours ago
...then in line 7 the incrementCounter() method mutates the counter variable reassigning it to the return value of counter +1.

This language isn't quite right. Can you identify why and rephrase this?


### 15

In the following code, the first two lines log false, while the third logs true. Shouldn't it be the other way around? Why does the code behave the way it does? What is the underlying principle here?

```javascript
console.log([] === []);  // false
console.log([] == []);   // false
console.log([] == '');   // true
```javascript

Your Answer

In line 1 the two values are compared with strict equality operators, essentially asking whether the two operands are the same objects. They are not because compound objects like arrays are unique and each saved in different places in memory regardless of whether they contain the same values.

Line 2 uses a non-strict equality operator, but when both operators are of the same type they behave the same as strict-equality operators.

Line 3 however causes implicit conversion, silently converting the first operand into an empty string. This is why it evaluates to true.
Responses


Brandi Seeley (TA)
about 5 hours ago
In line 1 the two values are compared with strict equality operators, essentially asking whether the two operands are the same objects. They are not because compound objects like arrays are unique and each saved in different places in memory regardless of whether they contain the same values.

This is a fair explanation, but it isn't quite the whole picture. Based on this, I would expect something like 1 === 1 to give us false. Can you elaborate on why we get false for line 1?
  
### 18

Write a different implementation of the function swapEnds we saw in the previous question. The new implementation should not mutate the array passed to it as an argument.

Your Answer

```javascript
function swapEnds(arr) {
  return [arr[arr.length - 1], arr.slice(1, arr.length - 1), arr[0]].flat();
}
```

Responses


Brandi Seeley (TA)
about 5 hours ago
This works for our example with integers, however there could be some unintended consequences from this implementation. Consider if I wanted to swap the ends of this array: [[1], [2], [3], [4]]. Can you write a solution that would work with arrays that contain objects?
