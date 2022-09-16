// forEach method doesn't return any new array

// Data
const people = [
    { name: 'Rezoan', age: 22, position: 'Developer', id: 1 },
    { name: 'Shakil', age: 23, position: 'Designer', id: 2 },
    { name: 'Prince', age: 24, position: 'Manager', id: 3 },
    { name: 'RSP', age: 25, position: 'HR', id: 4 },
]

// Approach: 01 -> Using normal function
function print(person) {
    console.log(`Single Item's name: ${person.name}`)
}

people.forEach(print)

// Approach: 02 -> Using anonymous function
people.forEach(function (person) {
    console.log(`Single Item's age: ${person.age}`)
})

// Approach: 03 -> Using arrow function (Recommended)
people.forEach((person) => {
    console.log(`Single Item's position: ${person.position}`)
})
