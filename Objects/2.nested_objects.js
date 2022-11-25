const age = 60

// nested objects
const person = {
    name: 'Prince', // Property
    age: age, // Set variable as property value
    married: false,
    siblings: ['anna', 'peter'],
    // Method way 01
    sayHello: function () {
        console.log('Hello world')
    },
    // Method way 02
    sayHi(name) {
        console.log(`Hi ${name}`)
    },
    job: {
        title: 'Developer',
        compnay: {
            name: 'BJIT',
            address: '123 main street',
        },
    },
    value: 'random',
    'random-value': 'random2',
}

console.log(person)
// Output:
// {
//   name: 'Prince',
//   age: 25,
//   married: false,
//   siblings: [ 'anna', 'peter' ],
//   sayHello: [Function: sayHello],
//   sayHi: [Function: sayHi],
//   job: {
//     title: 'Developer',
//     compnay: { name: 'BJIT', address: '123 main street' }
//   }
// }

console.log(person.job.compnay.name) // Output: BJIT
console.log(person.job.title.field) // Output: undefined

console.log(person.age)

// Accessing using braket notation
console.log(person['age'])

// If single property type is accessed using both dot and bracket notation
console.log(person['value'])
console.log(person.value)

// But if I use 'random-value' then I can't use dot notation because of '-'
console.log(person['random-value'])
