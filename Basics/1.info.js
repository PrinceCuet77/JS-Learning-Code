// ==, != -> checks any value
// ===, !== -> check value & type

const personName = 'John'
const personAge = 25
const sentance =
    "Hey it's " + personName + ' and he is ' + personAge + ' years old'
console.log(sentance)

// Output:
// Hey it's John and he is 25 years old

// Template literals - ES6+
const sentance2 = `Hey it's ${personName} and he is ${personAge} years old. And here is some simple math ${
    4 + 4
}`
console.log(sentance2)

// Output:
// Hey it's John and he is 25 years old. And here is some simple math 8

// Data type - total 7
// Primitives - String, Number, Boolean, Null, Undefined, Symbol
// Objects - Arrays, Functions, Objects

// 'null' is 'null' but it will show 'object' in js. It's a bug.

// Implicit type conversion
const val1 = '10'
const val2 = '23'

console.log(val1 + val2) // Output: 1023
console.log(val1 - val2) // Output: -13
console.log(val1 * val2) // Output: 230
console.log(val1 / val2) // Output: 0.43478260869565216

// If one of them is 'string' so 