// const ABC = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(arr) {
//   let wordsArr = arr.map(elem => ABC[elem]);
//   return wordsArr.sort().map(numWord => ABC.indexOf(numWord))
// };
//  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let r = alphabeticNumberSort(arr);
// let t = [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0];

// console.log(r);
// console.log(t);
// console.log(arr);

// OR

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
'twelve', 'thirteen', 'fourteen', 'fifteen',
'sixteen', 'seventeen', 'eighteen', 'nineteen'];


function alphabeticNumberSort(array) {
  return [...array].sort((n1, n2) => NUMBER_WORDS[n1] > NUMBER_WORDS[n2] ? 1 : -1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(alphabeticNumberSort(arr));

// but omitting the return value of 0 for two elements that are the same has some advantages/disadvantages.