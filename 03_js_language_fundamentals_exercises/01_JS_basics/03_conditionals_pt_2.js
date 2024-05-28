let condition1 = 0;
let condition2 = '2';
let condition3 = '3';
let condition4 = '4';
let condition5 = '5';
let condition6 = '6';
let condition7 = '7';


if (condition1) {
  console.log('Unique execution path 1');
  if (condition2) {
    console.log('Unique execution path 2');
  } else {
    console.log('Unique execution path 3');
  }
} else {
  if (condition4) {
    console.log('Unique execution path 4');
    if (condition5) {
      console.log('Unique execution path 5');
    }
    console.log('Unique execution path 6');
  }
  console.log('Unique execution path 7');
}