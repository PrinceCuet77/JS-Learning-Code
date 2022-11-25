// Array includes() - checks if the item is an array
// useful in the conditional statements

const groceries = ['milk', 'bread', 'meat']

let item = 'lemon'
console.log(groceries.includes(item)) // Output: false

item = 'milk'
console.log(groceries.includes(item)) // Output: true
console.log(groceries.includes(item, 1)) // Output: false (starts searching from 1)

if (groceries.includes(item)) {
    console.log('Yes, I can find it') // Output: Yes, I can find it
} else {
    console.log('No, I can not find')
}
