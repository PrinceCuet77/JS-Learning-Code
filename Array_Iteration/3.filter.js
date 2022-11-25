// Does return a new array
// Can manipulte the size of new array
// Returns based on condition

// Data
const people = [
    { name: 'Rezoan', age: 22, position: 'Developer', id: 1 },
    { name: 'Shakil', age: 23, position: 'Designer', id: 2 },
    { name: 'Prince', age: 24, position: 'Manager', id: 3 },
    { name: 'RSP', age: 25, position: 'HR', id: 4 },
]

// Approach: 01 -> Using normal function
function newAges(person) {
    return person.age > 23
}

console.log(people.filter(newAges))

// Approach: 02 -> Using anonymous function
const selectedAges = people.filter(function (person) {
    return person.age > 23
})

console.log(selectedAges)

// Approach: 03 -> Using arrow function (Recommended)
const selectedAge = people.filter((person) => {
    return person.age > 23
})

console.log(selectedAge)

// All the time, the output will be:
// [
//   { name: 'Prince', age: 24, position: 'Manager', id: 3 },
//   { name: 'RSP', age: 25, position: 'HR', id: 4 }
// ]
