function multiplesOfThreeAndFive() {
  for (counter = 1; counter <= 100; counter++) {
    if ((counter%3 === 0) && (counter%5 === 0)){
      console.log(String(counter)+'!');
    } else if ((counter%3 === 0) || (counter%5 === 0)) {
      console.log(String(counter));
    }
  }
}

multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity
