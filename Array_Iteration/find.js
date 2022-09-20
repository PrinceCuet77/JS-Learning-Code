// Return objects
// Return first match, if no match undefined
// Great for getting unique value

// Data
const people = [
    { name: 'Rezoan', age: 22, position: 'Developer', id: 1 },
    { name: 'Shakil', age: 23, position: 'Designer', id: 2 },
    { name: 'Prince', age: 24, position: 'Manager', id: 3 },
    { name: 'RSP', age: 25, position: 'HR', id: 4 },
]

// Approach: 01 -> Using normal function
function newId(person) {
    return person.id == 1
}

const developer = people.find(newId)
console.log(developer)

// Output:
// { name: 'Rezoan', age: 22, position: 'Developer', id: 1 }

// Approach: 02 -> Using anonymous function
const designer = people.find(function (person) {
    return person.id == 2
})

console.log(designer)

// Output:
// { name: 'Shakil', age: 23, position: 'Designer', id: 2 }

// Approach: 03 -> Using arrow function
const manager = people.find((person) => {
    return person.id == 3
})

console.log(manager)

// Output:
// { name: 'Prince', age: 24, position: 'Manager', id: 3 }
