// Array properties and methods
let names = ['john', 'bobo', 'barry', 'olgo', 'ben']

// length
console.log(names.length) // Output: 5
console.log(names[names.length - 1]) // Output: ben

// concat
const lastName = ['pepper', 'onion', 'banana']
const allNames = names.concat(lastName)
console.log(allNames)
// Output:
// ['john', 'bobo', 'barry', 'olgo', 'ben', 'pepper', 'onion', 'banana']

// reverse
console.log(allNames.reverse())
// Output:
// ['banana', 'onion', 'pepper', 'ben', 'olgo', 'barry', 'bobo', 'john']

console.log(allNames)
// Output:
// ['banana', 'onion', 'pepper', 'ben', 'olgo', 'barry', 'bobo', 'john']

// unshift - add in front
allNames.unshift('susy')
allNames.unshift('anna')
console.log(allNames)
// Output:
// ['susy', 'anna', 'banana', 'onion', 'pepper', 'ben', 'olgo', 'barry', 'bobo', 'john']

// shift - delete in front
allNames.shift()
allNames.shift()
console.log(allNames)
// Output:
// ['banana', 'onion', 'pepper', 'ben', 'olgo', 'barry', 'bobo', 'john']

// push - add in back
allNames.push('sasy')
console.log(allNames)
// Output:
// ['banana', 'onion', 'pepper', 'ben', 'olgo', 'barry', 'bobo', 'john', 'susy']

// pop - delete in back
allNames.pop()
allNames.pop()
allNames.pop()
console.log(allNames)
// Output:
// [ 'banana', 'onion', 'pepper', 'ben', 'olgo', 'barry' ]

// splice - mutates original array
// It will start from index 2 and delete from next 2 items and make a new array with that items.
const specificNames = allNames.splice(2, 2) // (start-index, how-many-items)
console.log(specificNames) // Output: [ 'pepper', 'ben' ]
console.log(allNames) // Output: [ 'banana', 'onion', 'olgo', 'barry' ]
