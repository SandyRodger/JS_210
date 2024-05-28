let readLine = require('readline-Sync');
let billAmount = parseFloat(readLine.question('what\'s the bill?\n'));
let tipRate = parseFloat(readLine.question('what\'s the tip-percentage?\n'));

let tip = (billAmount /100) * tipRate;
let totalBill = parseFloat(tip) + parseFloat(billAmount);
console.log(`tip is $${tip.toFixed(2)}`);
console.log(`bill is $${totalBill.toFixed(2)}`);