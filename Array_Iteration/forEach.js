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

// Output:
// Single Item's name: Rezoan
// Single Item's name: Shakil
// Single Item's name: Prince
// Single Item's name: RSP

// Approach: 02 -> Using anonymous function
people.forEach(function (person) {
    console.log(`Single Item's age: ${person.age}`)
})

// Output:
// Single Item's age: 22
// Single Item's age: 23
// Single Item's age: 24
// Single Item's age: 25

// Approach: 03 -> Using arrow function (Recommended)
people.forEach((person) => {
    console.log(`Single Item's position: ${person.position}`)
})

// Output:
// Single Item's position: Developer
// Single Item's position: Designer
// Single Item's position: Manager
// Single Item's position: HR
