// apply - run instantly, arguments - array of items.

const john = {
    name: 'john',
    age: 22,
}

function greet(city, country) {
    console.log(this)
    console.log(
        `Hello ${this.name} and age is ${this.age}. I'm from ${city}, ${country}`
    )
}

// Passing parameter using an array of items
greet.apply(john, ['new york', 'usa'])
// Output:
// { name: 'john', age: 22 }
// Hello john and age is 22. I'm from new york, usa

greet.apply({ name: 'Prince', age: 20 }, ['NY', 'usa'])
// Output:
// { name: 'Prince', age: 20 }
// Hello Prince and age is 20. I'm from NY, usa

// Other usecase is same as before discribed.
