// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables

const fruits = ['organe', 'banana', 'lemon']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

const orange = fruits[0]
const banana = fruits[1]
const lemon = fruits[2]
console.log(orange, banana, lemon) // Output: organe banana lemon

// Instead of that
const [orange1, banana1, lemon1] = fruits
console.log(orange1, banana1, lemon1) // Output: orange1 banana1 lemon1

// Skipping any value (peter & anna)
const [john, , bob, , kelly] = friends
console.log(john, bob, kelly) // Output: john bob kelly

// swapping variables
let first = 'firstValue'
let second = 'secondValue'

console.log(`Before swapping: ${first} & ${second}`)

let temp = first
first = second
second = temp

console.log(`After swapping: ${first} & ${second}`)

// Instead of that, swapping using destructuring array
[second, first] = [first, second]
console.log(`After swapping again using destructuring array: ${first} & ${second}`)
