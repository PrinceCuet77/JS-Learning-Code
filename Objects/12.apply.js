// The working process of 'call' and 'apply' is same.
// Scenario: 1
const john = {
    name: 'john',
    age: 22,
}

function greet() {
    console.log(this)
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`)
}

// Can't do the following line. Becuase, john has no method called 'greet'.
// john.greet()

// But can do the following line. Because 'apply' function runs instantly.
// Inside the 'greet' function, I can use an object called 'john' because inside 'greet', 'this' keyword is pointing 'window' object by default.
// To change the pointing object, I need to pass which object I want to point.
// Basically, using 'apply' function, I am changing the pointing object of 'this' inside the specific function.
greet.apply(john)
// Output:
// { name: 'john', age: 22 }
// Hello, I'm john and I'm 22 years old

// Scenario: 2
susan = {
    name: 'susan',
    age: 33,
    greet() {
        console.log(this)
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`)
    },
}

greet.apply(susan)
// Output:
// { name: 'susan', age: 33, display: [Function: display] }
// Hello, I'm susan and I'm 33 years old

// Can use that type as well. Result will be the same.
susan.greet()
// Output:
// { name: 'susan', age: 33, greet: [Function: greet] }
// Hello, I'm susan and I'm 33 years old

// Scenario: 3
susan.greet.apply({ name: 'Prince', age: 20 })
// Output:
// { name: 'Prince', age: 20 }
// Hello, I'm Prince and I'm 20 years old

// Scenario: 4
// Pointing to 'john' object while using 'susan'
susan.greet.apply(john)
// Output:
// { name: 'john', age: 22 }
// Hello, I'm john and I'm 22 years old
