let today = new Date();

let nextWeek = new Date(today.getTime());

console.log(today);    // 2024-05-14T11:24:10.794Z
console.log(nextWeek); // 2024-05-14T11:24:10.794Z

console.log(today === nextWeek); // false