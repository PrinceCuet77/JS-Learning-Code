function Account(name, initialBalance) {
    this.name = name
    this.balance = initialBalance
    this.bank = 'Bank of America'
}

const john = new Account('John', 100)
console.log(john.bank) // Output: Bank of America

Account.prototype.bank = 'CHASE'

// Don't update.
// Because, 'prototype.bank' will only update from 'undefined' keyword to defined variable when bank is 'undefined'. 
// Otherwise always show the initial one.
console.log(john.bank) // Output: Bank of America

// Property lookup is - 
// 1. 'prototype' will look, is 'Account' has 'bank' property?
// 2. If response -ve, then create 'bank' property and set that with the given value.
// 3. If response +ve, then nothing will change.