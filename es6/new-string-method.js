// New string methods
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith'
const employee = '23456-EMP-PETER-SMITH'
const manager = '23456-MAN-JOHN-DOE'

// startsWith()
console.log(person.startsWith('Pet')) // Output: true
console.log(person.startsWith('peter')) // Output: false
console.log(employee.startsWith('EMP', 6)) // Output: true

// endsWith()
console.log(manager.endsWith('DOE')) // Output: true
console.log(manager.endsWith('MAN', 9)) // Output: true

// includes
console.log(employee.includes('PETER')) // Output: true

const multiplyPoeple = (person, amount = 5) => person.repeat(amount)

const people = multiplyPoeple(person)
console.log(people) // // Output: Peter SmithPeter SmithPeter SmithPeter SmithPeter Smith
