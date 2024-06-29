function leadingSubstrings(str) {
  let output = [];
  for (i = 1; i <= str.length; i += 1) {
      output.push(str.slice(0, i))
    }
  return output
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]