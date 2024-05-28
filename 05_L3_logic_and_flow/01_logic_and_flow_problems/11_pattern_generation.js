function generatePattern(totalRows) {
  let row = '';

  for (rowNum = 1; rowNum <= totalRows; rowNum ++) {
    for (columnNum = 1; columnNum <= totalRows; columnNum++) {
      if (rowNum >= columnNum) {
        row += columnNum
      } else {
        row += '*'
      }
    }
    row += '\n'
  }
  console.log(row);
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567