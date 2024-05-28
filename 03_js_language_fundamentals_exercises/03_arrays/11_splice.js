/*
P:

Create a function which takes 3+ arguments ("array", "start", "toDelete", "...args") and returns the first agrument ("array:) mutated according to the other arguments. As follows:

"start": 
  - This is the index of the first element to be deletedCount from "array"
  - If "start" is greater than the length of the array, set it to array.length.
"toDelete": 
  - This is the number of elements to be deletedCount from "array". 
  - If "toDelete" is higher than the remaining elements (arr.length - "start") in the array set "toDelete" to array.length - "start".
"...args":
  - These arguments are optional, but if provided must be inserted at the index of "start".

E:

# 1

splice([1, 2, 3], 1, 2);              // [2, 3]
  - simple

# 2

splice([1, 2, 3], 1, 3);              // [2, 3]
  - array.length (3) - "start" (1) is 2. 2 < "toDelete", so:
  - "toDelete" = array.length (3) - "start" (2)
  - So in effect this is calculated the same es example 1.

# 3

splice([1, 2, 3], 1, 0);              // []

  - If toDelete is 0, return an empty array. 

# 4

  splice([1, 2, 3], 0, 1);              // [1]

    - Simple. Start at index 0, return the deletedCount elements and ignore the mutated original array.

# 5

  splice([1, 2, 3], 1, 0, 'a');         // []

  - If toDelete is 0, return an empty array, regardless of the element inserted into the array. 

 # 6 

  const arr2 = [1, 2, 3];
  splice(arr2, 1, 1, 'two');             // [2]
  arr2;                                  // [1, "two", 3]

  - [2] is the deletedCount element: 1 element at index 1
  - As 'two' is inserted the original array is mutated to [1, "two", 3]

# 7

  const arr3 = [1, 2, 3];
  splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
  arr3;                                  // [1, "two", "three"]

    - simple

# 8

  const arr4 = [1, 2, 3];
  splice(arr4, 1, 0);                    // []
  splice(arr4, 1, 0, 'a');               // []
  arr4;                                  // [1, "a", 2, 3]

    - If toDelete is 0, return an empty array
    - The first inserted argument will be at index "start"

# 9

  const arr5 = [1, 2, 3];
  splice(arr5, 0, 0, 'a');               // []
  arr5;                                  // ["a", 1, 2, 3]

  - Simple

D:

  - Iterating over "array"
  - Using helper methods ? 

A:

  - initialize "output" as "[]"
  - if toDelete is 0, return output.
  - initialize "deletedCount" as "0"
  - Iterate over "array" ("i")
    - if "i" is greater than or equal to "start":
      - if "deletedCount" is less than "toDelete"
        - insert array[i] into "output"
        - Increment "deletedCount"
      - reassign array[i] to array[i + toDelete]
  - reassign array.length to array.length - toDelete
  - return output


C:

*/


function splice(arr, start, toDelete, ...args) {
  let output = arr.slice(start, (start + toDelete));
  let displacedElems = [];
  const ARR_LENGTH = (arr.length - toDelete) + args.length;
  for (i = 0; i < ARR_LENGTH; i++) {
    if (i >= start) {
      displacedElems.push(arr[i + toDelete]);
      if (args.length > 0) {
        arr[i] = args.shift();        
      } else {
        arr[i] = displacedElems.shift();
      } 
    }
  }
  return output;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(arr4)                                   // [ 1, 2, 3 ]
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]