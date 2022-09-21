// All objects in javascript have access to constructor property that returns a constructor function that created it.
// Built in constructor functions
// Arrays and functions are objects in javascripts

const Person = function (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function () {
        console.log(
            `Full name is: ${this.firstName} ${this.lastName} and I love React JS`
        )
    }
}

const john = new Person('john', 'sanders')
console.log(john.constructor)
// Output:
// [Function: Person]

const bob = {}
console.log(bob.constructor)
// Output:
// [Function: Object]

const list = []
console.log(list.constructor)
// Output:
// [Function: Array]

const sayHi = function () {}
console.log(sayHi.constructor)
// Output:
// [Function: Function]

const susy = new john.constructor('susy', 'carpenter')
susy.fullName()
// Output:
// Full name is: susy carpenter and I love React JS
