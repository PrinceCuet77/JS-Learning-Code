// Spread operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single and copy them

// ------------------------------ Array --------------------------------------------
const udemy = 'udemy'
const letters = [...udemy]
console.log(letters) // Output: [ 'u', 'd', 'e', 'm', 'y' ]

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']
const bestFrind = 'arnold'

// Make 2D array
const fnds = [boys, bestFrind, girls]
console.log(fnds)
// Output: [ [ 'john', 'peter', 'bob' ], 'arnold', [ 'susan', 'anna' ] ]

// Just copy
const friends = [...boys, bestFrind, ...girls]
console.log(friends)
// Output: [ 'john', 'peter', 'bob', 'arnold', 'susan', 'anna' ]

// reference
const newFriends = friends
newFriends[0] = 'karina'
console.log(newFriends) // Output: [ 'karina', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
console.log(friends) // Output: [ 'karina', 'peter', 'bob', 'arnold', 'susan', 'anna' ]

// function arguments
const numbers = [23, 45, 66, 88, 2345]
console.log(Math.max(...numbers)) // Output: 2345

const john = ['john', 'sanders']
const sayHello = (name, lastName) => {
    console.log(`Hello ${name} ${lastName}`)
}
sayHello(...john) // Output: Hello john sanders

// ------------------------------ Object --------------------------------------------
const person = { name: 'john', job: 'developer' }

// first -> copy, middle -> add new property, last -> update existing property
const newPerson = { ...person, city: 'chicago', name: 'peter' }
console.log(person) // Output: { name: 'john', job: 'developer' }
console.log(newPerson) // Output: { name: 'peter', job: 'developer', city: 'chicago' }
