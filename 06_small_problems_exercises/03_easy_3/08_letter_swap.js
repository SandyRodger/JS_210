function letterSwap(word) {
  return word[word.length - 1] + word.slice(1, word.length - 1) + word[0]
}

function swap(str) {

  if (str.length === 1) {
    return str
  }

  return str.split(' ').map((word) => letterSwap(word)).join(' ')
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"