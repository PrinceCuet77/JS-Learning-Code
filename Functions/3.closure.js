// Closure gives an access to an outer function's scope from an inner function
// Make private variables with closures.

function outer1() {
    function inner1() {
        console.log('Hello World')
    }
    inner1()
}

outer1()
// Output:
// Hello World

function outer2() {
    let privateVar = 'secret'
    function inner2() {
        console.log(`Hello there secret is : ${privateVar}`)
    }
    return inner2
}

outer2()()
// Output:
// Hello there secret is : secret

const value = outer2()
console.log(value)
// Output:
// [Function: inner2]

value() // Same as outer2()()
// Output:
// Hello there secret is : secret

// ---------------------------------- Simple Example -------------------------------------
function newAccount(name, initialBalance) {
    let balance = initialBalance
    function showBalance() {
        console.log(`Hey ${name}, your balance is ${balance}`)
    }
    return showBalance
}

newAccount('susan', 500)()
// Output:
// Hey susan, your balance is 500

const john = newAccount('john', 300)
john()
// Output:
// Hey john, your balance is 300
