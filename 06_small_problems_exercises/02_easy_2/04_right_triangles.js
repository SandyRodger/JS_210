function buildRow(length, rowNumber) {
  let row = '';
  for (i = 0; i < length; i++) {
    row += i >= (length - rowNumber) ? '*' : '.'
  }
  return row
}

function triangle(length) {
  let row = '';
  for (rowNumber = 1; rowNumber <= length; rowNumber++) {
    row = buildRow(length, rowNumber);
    console.log(row)
  }
}

triangle(5);
triangle(9);