function dateSuffix(day) {

  let suffixes = ['th', 'st', 'nd', 'rd'];

  if ([11, 12, 13].includes(day) || ![1, 2, 3].includes(day % 10)) {
    return day + suffixes[0]
  } else {
    return day + suffixes[day % 10]
  }
  
}

function formattedMonth(n){
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][n.getMonth()]
};

function formattedDay(n){
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][n.getDay()]
};

function formattedDate(today){
  return `Today's date is ${formattedDay(today)}, ${formattedMonth(today)} ${dateSuffix(today.getDate())}`
};


let today = new Date();
console.log(formattedDate(today));
