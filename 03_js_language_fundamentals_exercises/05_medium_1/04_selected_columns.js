function getSelectedColumns(rows, targetColumns) {
  var output = [];

  for (var outerIndex = 0; outerIndex < rows.length; outerIndex += 1) {
    for (var innerIndex = 0; innerIndex < targetColumns.length; innerIndex += 1) {
      if (!output[innerIndex]) {
        output[innerIndex] = [];
      }

      output[innerIndex][outerIndex] = rows[outerIndex][targetColumns[innerIndex]];

    }
  }

  return output;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

/* 
The problem is that in the inner for loop `length` is reassigned to a lower number. Thia breaks the conditioin in the outer loop causing it to iterate too few times.
*/