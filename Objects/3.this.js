// Accessing the property of an object.
// In arrow function - this is working.
// Defaults to global 'this' is pointing 'window' object.

const person = {
    firstName: 'Rezoan',
    lastName: 'Shakil',
    fullName: function () {
        console.log(`Full name: ${this.firstName} ${this.lastName}`)
    },
}

// 'this' keyword is pointing to itself's properties.
person.fullName()

// Output:
// Full name: Rezoan Shakil
