// Does return a new array
// Does not change size of orginal size
// Uses values from original array when making new one.

// Data
const people = [
    { name: 'Rezoan', age: 22, position: 'Developer', id: 1 },
    { name: 'Shakil', age: 23, position: 'Designer', id: 2 },
    { name: 'Prince', age: 24, position: 'Manager', id: 3 },
    { name: 'RSP', age: 25, position: 'HR', id: 4 },
]

// Approach: 01 -> Using normal function
function newNames(person) {
    return person.name
}

const names = people.map(newNames)
console.log(names)

// Output:
// ('Rezoan', 'Shakil', 'Prince', 'RSP')

// Approach: 02 -> Using anonymous function
const ages = people.map(function (person) {
    return person.age
})

console.log(ages)

// Output:
// [(22, 23, 24, 25)]

// Approach: 03 -> Using arrow function
const positions = people.map((person) => {
    return person.position
})

console.log(positions)

// Output:
// [ 'Developer', 'Designer', 'Manager', 'HR' ]
