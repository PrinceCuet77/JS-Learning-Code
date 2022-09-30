// Set object - stores a collection of unique values of any type

// iterators
// entries(), keys(), values(), forEach()

// new Set()
const unique = new Set()

// add(value)
unique.add('first')
unique.add('first')
unique.add('second')
unique.add(4)
console.log(unique) // Output: Set(3) { 'first', 'second', 4 }

const random = 'third'
unique.add(random)
console.log(unique) // Output: Set(4) { 'first', 'second', 4, 'third' }

// delete(value)
const flag = unique.delete('first')
console.log('Deleted? ', flag) // Output: Deleted?  true

const flag1 = unique.delete('five')
console.log('Deleted? ', flag1) // Output: Deleted?  false

// has(value)
const present = unique.has('second')
console.log(present) // Output: true

const present1 = unique.has('second2')
console.log(present1) // Output: false

// work with forEach() method
console.log()
unique.forEach((item) => {
    console.log(item)
})
console.log()

// Output:
// second
// 4
// third

// clear()
unique.clear()
console.log(unique) // Output: Set(0) {}
