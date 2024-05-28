let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today);    // 2024-05-14T11:28:54.328Z
console.log(nextWeek); // 2024-05-14T11:28:54.328Z

console.log(today.getTime === nextWeek.getTime); // true

nextWeek.setDate(today.getDate() + 1)


console.log(nextWeek); // 2024-05-15T11:28:54.328Z
console.log(today.getTime() === nextWeek.getTime()); // false