function dateSuffix(day) {

  let suffixes = ['th', 'st', 'nd', 'rd'];

  if ([11, 12, 13].includes(day) || ![1, 2, 3].includes(day % 10)) {
    return day + suffixes[0]
  } else {
    return day + suffixes[day % 10]
  }
  
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();

console.log(dateSuffix(14))
console.log(dateSuffix(11))
console.log(dateSuffix(12))
console.log(dateSuffix(13))
console.log(dateSuffix(21))
console.log(dateSuffix(22))
console.log(dateSuffix(23))

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));
