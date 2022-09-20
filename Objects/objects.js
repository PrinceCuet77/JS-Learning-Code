// Objects are collections of key (property) value pairs.
// Property values can be strings, numbers, booleans, arrays and
// functions however if the property value is a function it's called a method.

const person = {
    name: 'Prince', // Property
    age: 25,
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
}

console.log(person)
// Output:
// {
//   name: 'Prince',
//   age: 25,
//   married: false,
//   siblings: [ 'anna', 'peter' ],
//   sayHello: [Function: sayHello],
//   sayHi: [Function: sayHi]
// }

// Accessing a property
console.log(person.name) // Output: Prince

// Accessing methods
person.sayHello() // Output: Hello world
person.sayHi('Shakil') // Output: Hi Shakil

// Updating the object
person.city = 'chicago'
console.log(person)
// Output:
// {
//   name: 'Prince',
//   age: 25,
//   married: false,
//   siblings: [ 'anna', 'peter' ],
//   sayHello: [Function: sayHello],
//   sayHi: [Function: sayHi],
//   city: 'chicago' ---------> New property
// }

// Delete property
delete person.city

console.log(person)
// Output:
// {
//   name: 'Prince',
//   age: 25,
//   married: false,
//   siblings: [ 'anna', 'peter' ],
//   sayHello: [Function: sayHello],
//   sayHi: [Function: sayHi]
// }

// Storing the deleting value
const siblingsFlag = delete person.siblings
console.log(siblingsFlag) // Output: true
console.log(person)
// Output:
// {
//   name: 'Prince',
//   age: 25,
//   married: false,
//   sayHello: [Function: sayHello],
//   sayHi: [Function: sayHi]
// }
