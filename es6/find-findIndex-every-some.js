// find - gets specific item
// findIndex - get's index of the item
// every - every item in the array
// some - at least one item

const people = [
    { id: 1, name: 'john' },
    { id: 1, name: 'john' },
    { id: 1, name: 'john' },
]

const grades = ['A', 'B', 'A', 'B', 'C']
const goodGrades = ['A', 'B', 'A', 'B']

const anna = people.filter((person) => person.name === 'anna')
console.log(anna)
console.log(anna[0].name)
console.log(anna[0].id)
