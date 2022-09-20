const person = {
    firstName: 'Rezoan',
    lastName: 'Shakil',
    fullName: function () {
        console.log(`Full name: ${this.firstName} ${this.lastName}`)
    },
}

// 'this' keyword is pointing to itself's properties.
person.fullName()
