// var - define, update, redefine
// let - define, update
// const - define

// --------------------- var --------------------
// define
var number = 100
console.log(number)
// Output: 100

// update
number = 200
console.log(number)
// Output: 200

// redefine
var number = 'prince'
console.log(number)
// Output: prince

// --------------------- let --------------------
// define
let number1 = 100
console.log(number1)
// Output: 100

// update
number1 = 200
console.log(number1)
// Output: 200

// --------------------- const --------------------
// define
const value = 100
console.log(value)
// Output: 100

// const cannot mutate primitive type
// reference type. so I can change it's property value even it's const
const person = { name: 'bob' }
console.log(person)
// Output:
// { name: 'bob' }

person.name = 'Prince'
console.log(person)
// Output:
// { name: 'Prince' }
