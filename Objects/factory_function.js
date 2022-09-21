// Return an object
const createPerson = function (firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(
                `Full name is: ${this.firstName} ${this.lastName} and I love JS`
            )
        },
    }
}

// prince is an object
prince = createPerson('Rezoan', 'Shakil')
prince.fullName() // Accessing object method

// Output:
// Full name is: Rezoan Shakil and I love JS
