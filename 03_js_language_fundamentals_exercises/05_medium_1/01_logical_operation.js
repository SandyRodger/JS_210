console.log((false && undefined)) // false TICK
console.log((false || undefined)) // false CROSS undefined
console.log(((false && undefined) || (false || undefined))) // false CROSS undefined
console.log(((false || undefined) || (false && undefined))) // false TICK
console.log(((false && undefined) && (false || undefined))) // false TICK
console.log(((false || undefined) && (false && undefined))) // false CROSS undefined
console.log(('a' || (false && undefined) || '')) // true CROSS "a"
console.log(((false && undefined) || 'a' || '')) // true  CROSS "a"
console.log(('a' && (false || undefined) && '')) // false CROSS undefined
console.log(((false || undefined) && 'a' && '')) // false CROSS undefined

// because logical operators return one of the values, not a boolean. Despite evaluating by truthiness.