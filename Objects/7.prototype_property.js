// Prototypal Inheritance Model
// Javascript uses prototypal inheritance model.
// That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class.
// So any properties and methods or prototype can be accessed by every instance.
// Prototype property returns a object.

function Account(name, initialBalance) {
    this.name = name
    this.balance = initialBalance
}

const john = new Account('john', 200)
console.log(john) // Output: Account { name: 'john', balance: 200, deposit: [Function (anonymous)] }
console.log(john.bank) // Output: undefined

// Commonly added to the object which is created using 'Account'. Available for all the objects which is created using 'Account'. No need to add this for one by one. (dynamically)
Account.prototype.bank = 'CHASE' // Property

// Methods
Account.prototype.deposit = function (amount) {
    this.balance += amount
    console.log(`Hello ${this.name}, your balance is ${this.balance}`)
}

console.log(john) // Output: Account { name: 'john', balance: 200, deposit: [Function (anonymous)] }, but in browser, 'bank' will show in 'prototype' section.
console.log(john.bank) // CHASE
john.deposit(500) // Output: Hello john, your balance is 700

// Another object
const bob = new Account('bob', 200)
bob.deposit(1000) // Output: Hello bob, your balance is 1200
