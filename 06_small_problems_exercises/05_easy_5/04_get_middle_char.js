function centerOf(str) {
  let halfIndex = Math.floor(str.length / 2)
  if (str.length % 2 === 1) {
    console.log(str[halfIndex])
  } else {
    console.log(str.slice(halfIndex -1, halfIndex + 1))
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"