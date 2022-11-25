// Destructuring
// fast/easier way to access/unpack values from arrays
// objects into variables

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: { sister: 'jane' },
}

const {
    first: firstName, // alias
    last,
    city,
    zip, // not found so undefined
    siblings: { sister: favoriteSibling },
} = bob

console.log(firstName, last, city, zip, favoriteSibling)
// Output: bob sanders chicago undefined jane

// Destructuring function parameters
function printPerson({ first, last, city }) {
    // const { first, last, city } = person --> alternate way
    console.log(first, last, city)
}

printPerson(bob) // Output: bob sanders chicago
