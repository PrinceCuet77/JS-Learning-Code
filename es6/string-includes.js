// String includes() - checks if a string contains another string
// Case sensitative

const firstName = 'john'
console.log(firstName.includes('jo')) // Output: true
console.log(firstName.includes('Jo')) // Output: false
console.log(firstName.includes('jo', 2)) // Output: false (starts from index 2)

const product = {
    title: 'Leather Chair',
}
console.log(product.title.includes('Ch')) // Output: true

const products = [
    { title: 'Modern Poster' },
    { title: 'Bar Stool' },
    { title: 'Armchair' },
    { title: 'Leather Chair' },
]

const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes('a')
)
console.log(filteredProducts)
// Output:
// [
//   { title: 'Bar Stool' },
//   { title: 'Armchair' },
//   { title: 'Leather Chair' }
// ]