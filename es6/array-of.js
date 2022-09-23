// Array.from and Array.of
// Array.of creates a new Array instance from a variable number of arguments

const example = ['one', 'two', 'three']
const friends = Array.of('john', 2, true)

console.log(example)
console.log(friends)
// Output: [ 'john', 2, true ]

// Array.from - returns object from any object with a length property or an iterable object
// Array.from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy'
console.log(Array.from(udemy))
// Output: [ 'u', 'd', 'e', 'm', 'y' ]

function countTotal() {
    let total = Array.from(arguments).reduce(
        (total, currNum) => (total += currNum),
        0
    )
    console.log(total)
}

countTotal(67, 54, 89, 100) // Output: 310
