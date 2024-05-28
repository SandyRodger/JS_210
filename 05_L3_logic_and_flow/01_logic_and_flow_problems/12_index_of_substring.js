// function indexOf(str1, str2) {
//   for (index = 0; index <= (str1.length - str2.length); index++) {
//     let slice = str1.slice(index, (index + str2.length));
//     if (slice === str2) {
//       return str1.indexOf(str2);
//     }
//   }
//   return -1
// }

// I made it work, but hadn't read the question properly. Built in string methods are forbidden.

/*
P: 

- Write two functions, which each take two strings ("str1", "str2") and return a single integer.

  - indexOf:
    - Search str1 for a "slice" that matches second string
    - Return the index of the first char in "slice".
    - If there is no match, return -1

  - lastIndexOf

E:

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1  -This example shows that str1 can't be concatenated to str1 to make searching easier.

D:

- Strings
- Index operator (Square brackets operator?)

A:

- Search str1 for a "slice" that matches second string:
  - Iterate over str1 comparing char to str2's first char.
  - If a match is found:
    - save that index as "matchCandidate"
    - begin comparing from str1[matchCandidate] with str2
  - If this comparison gets to the end of str2 then return "matchCandidate"
- If there is no match, return -1

C:
*/

// - Search str1 for a "slice" that matches second string:
//   - Iterate over str1 comparing char to str2's first char.
//   - If a match is found:
//     - save that index as "matchCandidate"
//     - begin comparing from str1[matchCandidate] with str2
//   - If this comparison gets to the end of str2 then return "matchCandidate"
// - If there is no match, return -1


function isTotalMatch(matchCandidate, str1, str2) {
  for (i2 = 0; i2 !== str2.length; i2++) {
    if (str1[matchCandidate+i2] !== str2[i2]) {
      return false
    }
  }
  return true
}

function findMatches(str1, str2) {
  let matches = [-1];
  for (i1 = 0; i1 < str1.length; i1++) {
    if ((str1[i1] === str2[0]) && (isTotalMatch(i1, str1, str2))) {
      matches.push(i1)
    }
  }
  return matches
}

function indexOf(str1, str2) {
  return findMatches(str1, str2)[1] || -1
}
  
function lastIndexOf(str1, str2) {
  return findMatches(str1, str2).pop();
};

console.log(indexOf('Some strings', 's') === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Blute') === -1);
console.log(indexOf('Blue Whale', 'leB') === -1);
console.log(lastIndexOf('Some strings', 's') === 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') === -1);