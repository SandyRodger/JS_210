function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities(['abc', 'def'])); 
/*
These objects are different because a new object is returned by the function
*/