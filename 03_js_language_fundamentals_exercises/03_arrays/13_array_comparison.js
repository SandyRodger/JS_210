function containDifferentElems(a1, a2) {
  for (i = 0; i < a1.length; i++) {
    if (!a1.includes(a2[i])) {
      return true
    }
  }

  return false

}

function containDifferentQuantityofElems(a1, a2) {

  let arrCount1 = countElementsInArray(a1);
  let arrCount2 = countElementsInArray(a2);

  for (i = 0; i < a1.length; i++) {
    if (arrCount1[i] != arrCount2[i]) {
      return true
    }
  }

  return false

}

function countElementsInArray(arr) {
  let output = {};

  for (i = 0; i < arr.length; i++) {
    if (!Object.hasOwn(output, arr[i])) {
      output[arr[i]] = 1;
    } else {
      output[arr[i]] += 1;
    }
  }

  return output

}

function areArraysEqual(a1, a2) {

  return !(containDifferentElems(a1, a2) || containDifferentQuantityofElems(a1, a2))

}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true );
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true );
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true );
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false );
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true );
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false );
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false );
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false );
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false );
console.log(areArraysEqual([1, 1], [1, 1]) === true );
console.log(areArraysEqual([1, '1'], ['1', 1]) === true );