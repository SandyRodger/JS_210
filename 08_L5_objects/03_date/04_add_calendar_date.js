let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log("Today's day is " + daysOfWeek[today.getDay()]);
let output4 = `Today's date is ${daysOfWeek[today.getDay()]} the ${today.getDate()}`
console.log(output4)
