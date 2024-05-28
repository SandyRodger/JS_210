const DEGREE = '\u00B0';

function padNum(n) {
  let strNum = String(Math.floor(n));
  if (strNum === '0') {
    return '00'
  } else if (strNum.length > 1) {
    return strNum
  } else {
    return `0${strNum}`
  }
}

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = (angle * 60) % 60;
  let seconds = (angle * 60 * 60) % 60;
  return `${degrees}${DEGREE}${padNum(minutes)}'${padNum(seconds)}"`
}

// All test cases should return true
console.log(dms(30))// === "30°00'00\"");
console.log(dms(76.73))// === "76°43'48\"");
console.log(dms(254.6))// === "254°35'59\"");
console.log(dms(93.034773))// === "93°02'05\"");
console.log(dms(0))// === "0°00'00\"");
console.log(dms(360))// === "360°00'00\"" || dms(360) === "0°00'00\"");