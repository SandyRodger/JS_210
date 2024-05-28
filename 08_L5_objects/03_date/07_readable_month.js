function dateSuffix(day) {

  let suffixes = ['th', 'st', 'nd', 'rd'];

  if ([11, 12, 13].includes(day) || ![1, 2, 3].includes(day % 10)) {
    return day + suffixes[0]
  } else {
    return day + suffixes[day % 10]
  }
  
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let today = new Date();

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +  
            months[today.getMonth()] + ' ' + 
            dateSuffix(today.getDate()));
