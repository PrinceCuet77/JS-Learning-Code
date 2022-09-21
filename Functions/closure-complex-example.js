function newAccount(name, initialBalance) {
    let balance = initialBalance

    function showBalance() {
        console.log(`Hey ${name}, your balance is ${balance}`)
    }

    function deposit(amount) {
        balance += amount
        console.log(`Hey ${name}, your balance is ${balance}`)
    }

    function withdraw(amount) {
        if (balance < amount) {
            console.log("Sorry, you don't have enough balance")
            return
        }
        balance -= amount
        console.log(`Hey ${name}, your balance is ${balance}`)
    }

    return { showBalance: showBalance, deposit: deposit, withdraw: withdraw }
}

john = newAccount('John', 400)
john.showBalance()
// Output:
// Hey John, your balance is 400

john.deposit(100)
// Output:
// Hey John, your balance is 500

john.withdraw(400)
// Output:
// Hey John, your balance is 100

john.withdraw(400)
// Output:
// Sorry, you don't have enough balance
