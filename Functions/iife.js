// IIFE means Immediately Invoked Function Expression
// older approach - new Modules
// Simple approach to avoid global scope pollution
// Good way at protecting the scope of your function and the variables within it.
// Global namespace, extra steps

// Without parameter and return type
// (function () {
//     console.log('Hello World')
// })()
// Output:
// Hello World

// Passing parameters and without return type
;(function (a, b) {
    console.log(`a: ${a} and b: ${b}`)
})(5, 10)
// Output:
// a: 5 and b: 10

// Passing parameters and using return type
const result = (function (a, b) {
    return a + b
})(5, 10)
console.log(result)
// Output:
// 15
