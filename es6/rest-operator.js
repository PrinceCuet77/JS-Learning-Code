// Rest operator ...
// Gather/collects the items
// Write rest operator must be in last

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear']
const [first, ...fruit] = fruits
console.log(first, fruit)
// Output: apple [ 'orange', 'lemon', 'banana', 'pear' ]

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { job, ...rest } = person
console.log(job, rest)
// Output: developer { name: 'john', lastName: 'smith' }
