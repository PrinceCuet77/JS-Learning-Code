// Construction function because first letter is capital (convention)
// I can't use arrow function becuase 'this' keyword is used.
const Person = function (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function () {
        console.log(
            `Full name is: ${this.firstName} ${this.lastName} and I love React JS`
        )
    }
}

// Must provide new
// 'new' works like - 1. creates new object, 2. points to it, 3. omit return.
const prince = new Person('Rezoan', 'Shakil')
prince.fullName()

// Output:
// Full name is: Rezoan Shakil and I love React JS
