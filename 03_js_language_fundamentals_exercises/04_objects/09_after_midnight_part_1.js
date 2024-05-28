const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {

  let date = new Date('0');

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  date.setMinutes(deltaMinutes % MINUTES_PER_HOUR)
  date.setHours(Math.floor(deltaMinutes / MINUTES_PER_HOUR))

  return date.toTimeString().slice(0, 5)
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// function secondsToMilliseconds(secs) {
//   return String(Number(secs) * 1000);
// }

// // const date1 = new Date('0');

// // console.log(date1.getUTCSeconds());
// // console.log(date1.setUTCSeconds(secondsToMilliseconds(35)));
// // console.log(date1.toTimeString().slice(0, 5));