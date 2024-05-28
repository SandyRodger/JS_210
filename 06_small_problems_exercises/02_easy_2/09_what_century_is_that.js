function findCentury(year) {
  let century = year / 100;

  if (century < 1) {
    return 1
  } else if ((parseInt(century) < century)) {
    century = parseInt((century) + 1)
  } else {
    century
  }
    
  return century
}

function formatCentury(int) {
  let unit = String(int).slice(-1);
  if (unit === '1' && int != 11) {
    return int + 'st'
  } else if (unit === '2' && int != 12) {
    return int + 'nd'
  } else if (int === 3) {
    return int + 'rd'
  } else {
    return int + 'th'
  }
}

function century(year) {
  let int = findCentury(year);
  return formatCentury(int);
}

compare(century(2000), "20th");
compare(century(2001), "21st");
compare(century(1965), "20th");
compare(century(256), "3rd");
compare(century(5), "1st");
compare(century(10103), "102nd");
compare(century(1052), "11th");
compare(century(1127), "12th");
compare(century(11201), "113th");

function compare(outcome, test) {
  if (outcome === test) {
    console.log(true);
  } else {
    console.log(`fail: outcome is ${outcome}`);
  }
}