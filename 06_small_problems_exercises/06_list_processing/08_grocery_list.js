/*
P:

Write a function that takes an array of subarrays. Each subarray contains a string and an integer, reopresenting the fruit and its quantity.

The function should return a single array containing the strings as many times as their quantity is. 

E:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]) 
  == ["apple", "apple", "apple", "orange", "banana", "banana"]

D: 

SubArrays
Strings
Integers

A:

- declare an variable "output" assigned to an empty array
- iterate over each subArray ("subArray")
- for each subArray push the string into Output as many times as the quantity says.
  - 
- return output

*/


function buyFruit(arr) {
  let output = [];
  arr.forEach((subArr) => output.push(new Array(subArr[1])));
    for (i = 0; i < arr.length; i += 1) {
      output[i].fill(arr[i][0], 0)
    }
  return output.flat()
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]