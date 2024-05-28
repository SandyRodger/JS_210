function getGrade(n1, n2, n3) {
  let avg = (n1 + n2 + n3) / 3;
  if (avg >= 90 ) {
    console.log('A')
  } else if (avg >= 80) {
    console.log('B')
  } else if (avg >= 70) {
    console.log('C')
  } else if (avg >= 60) {
    console.log('D')
  } else {
    console.log('F')
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"