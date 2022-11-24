// Function with no parameter
function hello() {
    console.log('Hello')
}

hello()

// Output:
// Hello

// Function with parameter
function hello2(name) {
    console.log(name)
}

hello2('Prince')

// Output:
// Prince

// Function with return
function hello3() {
    return 100
}

console.log(hello3())
const val = hello3()
console.log(val)

// Output:
// 100
// 100

const arr = [5, 10, hello3()]
console.log(arr)

// Output:
// [ 5, 10, 100 ]

// Arrow function - function expression
const multiply = (a, b) => a * b
console.log(multiply(5, 10))

// Output:
// 50

// Anonymous function - function expression
const mul = function (a, b) {
    return a * b
}
console.log(mul(5, 5))

// Output:
// 25
