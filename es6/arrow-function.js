// No name, always expression, assign to variable
// No function keyword
// 'this' can't work in arrow function

const sayHi = () => console.log('Hello')
sayHi() // Output: Hello

const double = (value) => value * 2
console.log(double(4)) // Output: 8

const multiply = (num1, num2) => {
    const result = num1 + num2
    return result
}
console.log(multiply(3, 4)) // Output: 7

// return object
const object = () => ({ name: 'john', age: 25 })
const person = object()
console.log(person) // Output: { name: 'john', age: 25 }

// default parameters: If I don't give any parameter then the function uses default parameter.
function newFunction(value = 'Prince') {
    console.log(`Value: ${value}`)
}
newFunction() // Output: Value: Prince

// same as arrow function
const val = (value = 'Shakil') => console.log(`Value: ${value}`)
val() // Output: Value: Shakil

// arrow funciton gotcha: Must use or call or invoke arrow function after declaration.
// But other normal function, it's not an issue.
