function substring(string, start, end) {
  let substring = '';
  let newStart = start;
  let newEnd = end;

  // Sort out start:
  if (start < 0 || start != start || (Number(start) !=  Number(start))) {
    newStart = 0
  } else if ((start > end) && (end >= 0)) {
    newStart = end;
  } else if (start === end) {
    return ''
  } else if (start > string.length) {
    newStart = string.length
  } 
  // sort out end:
  if (start > end) {
    newEnd = start
  } else if (end < 0 || end != end) {
    newEnd = 0
  } else if ((end > string.length) || (end === undefined)) {
    newEnd = string.length
  } 

  // console.log(`newStart = ${newStart}. newEnd = ${newEnd}`)

for (i = newStart; i < newEnd; i++) {
  substring += string[i]
}

  return substring;
}

let string = 'hello world';

compare(substring(string, 2, 4),  "ll");
compare(substring(string, 4, 2),  "ll");
compare(substring(string, 0, -1),  "");
compare(substring(string, 2),  "llo world");
compare(substring(string, 'a'),  "hello world");
compare(substring(string, 8, 20),  "rld");

function compare(output, test) {
  if (output === test) {
    console.log(true);
  } else {
    console.log(`Fail: output is '${output}'`)
  }
}