// ES6 class
class Account {
    // When a new instance will create, that will call 'constructor' function automatically and initialize the value.
    constructor(name, initialBalance) {
        this.name = name
        this.balance = initialBalance
    }

    // common property for all the 'Account' instance like 'prototype.bank'
    bank = 'chase'

    // method
    deposit(amount) {
        this.balance += amount
        console.log(`Hello ${this.name}, your balance is ${this.balance}`)
    }
}

const john = new Account('john', 200)
console.log(john.name) // Output: john
console.log(john.balance) // Output: 200
console.log(john.bank) // Output: chase
john.deposit(700) // Output: Hello john, your balance is 900
