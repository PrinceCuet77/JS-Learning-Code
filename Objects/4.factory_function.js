// This is not a dynamic. Because setting the value of the object's property statically.
const john = {
    firstName: 'john',
    lastName: 'anderson',
    fullName: function () {
        console.log(
            `My full name is ${this.firstName} ${this.lastName} and I love JS`
        )
    },
}

// Factory function to create a dynamic object.
// Setting the value of the object's property dynamically.
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
person = createPerson('Rezoan', 'Shakil')
person.fullName() // Accessing object method

// Output:
// Full name is: Rezoan Shakil and I love JS

// Another syntax:
const createPerson1 = function (firstName, lastName) {
    return {
        firstName, // function parameter and object property are same name. (ES6 feature).
        lastName,
        fullName: function () {
            console.log(
                `Full name is: ${this.firstName} ${this.lastName} and I love JS`
            )
        },
    }
}

person1 = createPerson1('A', 'B')
person1.fullName()

// Output:
// Full name is: A B and I love JS
