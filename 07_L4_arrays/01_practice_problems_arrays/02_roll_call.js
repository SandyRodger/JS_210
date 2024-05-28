const NAMES = ['Steve', 'Martha', 'Pat'];

function rollCall(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
}

rollCall(NAMES);