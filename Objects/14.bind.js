// bind - assign, use later, run it later

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

// Passing parameter using a list of items
const val1 = greet.bind(john, 'new york', 'usa')
val1()
// Output:
// { name: 'john', age: 22 }
// Hello john and age is 22. I'm from new york, usa

const val2 = greet.bind({ name: 'Prince', age: 20 }, 'NY', 'usa')
val2()
// Output:
// { name: 'Prince', age: 20 }
// Hello Prince and age is 20. I'm from NY, usa

// Other usecase is same as before discribed.
