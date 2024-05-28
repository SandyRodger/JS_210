function countOccurrences(arr) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1
    }
  
  for (const [k, v] of Object.entries(obj)) {
    console.log(`${k} => ${v}`)
  }

}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1