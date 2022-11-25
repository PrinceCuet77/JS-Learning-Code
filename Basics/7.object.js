const person = {
    name: 'Prince', // Property
    age: 22,
    education: false,
    siblings: ['anna', 'susan'],
    hello: function () {
        // method
        return 'Hello'
    },
    world() {
        // ES6 style to declare method
        return 'World'
    },
}

// Access
console.log(person.name) // Output: Prince
console.log(person.siblings[1]) // Output: susan
console.log(person.hello()) // Output: Hello
console.log(person.world()) // Output: World
