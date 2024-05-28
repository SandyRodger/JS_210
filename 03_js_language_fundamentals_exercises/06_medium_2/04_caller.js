function makeDoubler(caller) {
  let name = caller;
  let output = function doubler(number) {
    console.log(`This function was called by ${name}.`);
    return number + number;
  }
  return output;
}

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.