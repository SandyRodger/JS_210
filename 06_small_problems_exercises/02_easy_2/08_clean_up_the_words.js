function cleanUp(str) {
  let output = ' ';
  for (i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      output += str[i]
    } else if (output[output.length-1] !== ' ') {
      output += ' '
    }
  }
  return output.slice(1,output.length-1)
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "