// for of - loops through the values of an iterable object
// String, Array, Map, Set etc - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ['apply', 'orange', 'banana', 'peach']
const longName = 'John Smith Pepper III'
let shortName = ''

for (const letter of longName) {
    if (letter === ' ') continue
    else shortName += letter
}
console.log(shortName) // Output: JohnSmithPepperIII

for (const fruit of fruits) {
    if (fruit === 'banana') continue
    console.log(fruit)
}
// Output:
// apply
// orange
// peach
