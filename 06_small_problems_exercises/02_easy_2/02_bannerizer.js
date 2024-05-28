function createLine(length, endChar, midChar) {
  output = endChar
  for (n = 0; n < (length + 2); n++) {
    output += midChar
  }
  return output + endChar
}

function createTextLine(str) {
  output = '| '
  output += str
  return output + ' |'
}

function logInBox(str) {
  length = str.length
  let horizontalLine = createLine(length, '+', '-')
  let emptyLine = createLine(length, '|', ' ')
  let textLine = createTextLine(str)
  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(textLine);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');