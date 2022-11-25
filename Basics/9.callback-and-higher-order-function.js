// The use of callback-function


function morning(name) {
    return `Good morning ${name.toUpperCase()}`
}

function greetings(name, cb) {
    const myName = 'Prince'
    console.log(`${morning(name)}, I'm ${myName}.`)
}

greetings('john', morning)
// Output:
// Good morning JOHN, I'm Prince.
