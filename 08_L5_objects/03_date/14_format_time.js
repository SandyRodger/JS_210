function padMins(n) {
  if (n < 10) {
    return '0' + n
  } else {
    return n
  }
}

function formatTime(date) {
  let hours =  date.getHours();
  let mins = padMins(date.getMinutes());
  return `${hours}:${mins}`
};

let today = new Date();
let testDay = new Date('2013-03-01T01:01:00');
console.log(formatTime(today))
console.log(formatTime(testDay))
