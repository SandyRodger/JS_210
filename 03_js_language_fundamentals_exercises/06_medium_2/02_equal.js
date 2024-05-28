const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true
console.log(person.name === otherPerson.name);    // true
console.log(person.keys === otherPerson.keys);    // true
console.log(person.values === otherPerson.values);    // true