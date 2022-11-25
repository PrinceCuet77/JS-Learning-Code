// Iterates, callback function
// Reduces to a single value - number, array, object
// 1. 1st parameter ('acc') - total of all calculations
// 2. 2nd parameter ('curr) - current iteration

// Data
const people = [
    { name: 'Rezoan', age: 22, position: 'Developer', id: 1, salary: 200 },
    { name: 'Shakil', age: 23, position: 'Designer', id: 2, salary: 100 },
    { name: 'Prince', age: 24, position: 'Manager', id: 3, salary: 300 },
    { name: 'RSP', age: 25, position: 'HR', id: 4, salary: 500 },
]

// Approach: 01 -> Using normal function
function salaryCount(total, current) {
    total += current.salary
    return total
}

const totalSalary = people.reduce(salaryCount, 0)
console.log(totalSalary)

// Output: 1100

// Approach: 02 -> Using anonymous function
const totalSalary2 = people.reduce(function (total, current) {
    total += current.salary
    return total
}, 0)

console.log(totalSalary2)

// Output: 1100

// Approach: 03 -> Using Arrow function (recommended)
const totalSalary3 = people.reduce((total, current) => {
    total += current.salary
    return total
}, 0)

// Here 0 is the default value of total. It can be object, array or anything.

console.log(totalSalary3)

// Output: 1100
