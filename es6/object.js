// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
    name: 'john',
    age: 25,
    status: 'student',
}

const keys = Object.keys(person)
console.log(keys)
// Output: [ 'name', 'age', 'status' ]

const values = Object.values(person)
console.log(values)
// Output: [ 'john', 25, 'student' ]

const result = Object.entries(person)
console.log(result) // Output: [ [ 'name', 'john' ], [ 'age', 25 ], [ 'status', 'student' ] ]

// const newResult = result.map((item) => {
const newResult = result.map(([first, second]) => {
    // const [first, second] = item
    return first
})

console.log(newResult) // Output: [ 'name', 'age', 'status' ]
