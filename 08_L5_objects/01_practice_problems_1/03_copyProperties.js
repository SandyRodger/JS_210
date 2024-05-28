function copyProperties(o1, o2) {
  o1Keys = Object.keys(o1)
  for (i = 0; i < o1Keys.length ; i++) {
    o2[o1Keys[i]] = o1[o1Keys[i]]
    propsCopied += 1
  }
  return o1Keys.length
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }