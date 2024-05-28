function logOddNumbers(upperLimit) {
  for(counter = 0; counter <= upperLimit; counter++) {
    if(counter % 2 === 1) {
      console.log(counter);
    }
  }
}

logOddNumbers(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19