// Construction function because first letter is capital (convention)
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
// new - creates new object, points to it, omit return.
const prince = new Person('Rezoan', 'Shakil')
prince.fullName()

// Output:
// Full name is: Rezoan Shakil and I love React JS
