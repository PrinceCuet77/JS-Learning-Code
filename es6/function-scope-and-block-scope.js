// let, const - blocked scoped, anything within {}
// var - function scoped

// global scope
var amount = 100

function greet() {
    var random = 'some random value' // local scope
    console.log(`hello there ${amount} ${random}`)

    var amount = 200
}

greet() // Output: hello there 100 some random value

console.log(amount) // Output: 200

// ===================================================
let total = 100
var test = true

if (test) {
    var test = 200
    let total = 500
}

console.log(test) // Output: 200 (update)

console.log(total) // Output: 100 (not update)
