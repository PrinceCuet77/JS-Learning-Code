// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure).

// Higher Order function - accepts another function as an argument or returns another function as a result.

// Callback function - passed to an another function as an argument and executed inside that function.

function morning(name) {
    return `Good morning ${name.toUpperCase()}`
}

function afternoon(name) {
    return `Good afternoon ${name.toUpperCase()}`
}

// greatings - higher order function
// morning - callback function
function greetings(name, cb) {
    const myName = 'Prince'
    console.log(`${morning(name)}, I'm ${myName}.`)
}

greetings('john', morning)
greetings('john', afternoon)
// Output:
// Good morning JOHN, I'm Prince.
// Good afternoon JOHN, I'm Prince.

// Use callback and higher order function instead of the following example:
// function greetMorning(name) {
//     const myName = 'john'
//     console.log(`Good morning ${name}, my name is ${myName}`)
// }

// function greetAfternoon(name) {
//     const myName = 'john'
//     console.log(`Good afternoon ${name}, my name is ${myName}`)
// }

// greetMorning('bobo')
// greetAfternoon('peter')
