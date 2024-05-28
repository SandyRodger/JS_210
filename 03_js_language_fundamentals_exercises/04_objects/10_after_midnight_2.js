// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const midnight = new Date('1/1/2000 00:00');
//   const inputHours = Number(timeStr.slice(0, 2)) // 12
//   const inputMinutes = Number(timeStr.slice(3)) // 
//   let hoursAfterMidnight = new Date(midnight.getTime()).getHours() + inputHours;
//   let minutesAfterMidnight = new Date(midnight.getTime()).getMinutes() + inputMinutes;

//   return hoursAfterMidnight * 60 + minutesAfterMidnight;
// }

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// LS:

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);
  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
