const text = `{"employee":[
    {"firstname":"Rezoan", "age":"22"},
    {"firstname":"Shakil", "age":"23"},
    {"firstname":"Prince", "age":"24"}
]}`

console.log('Plain text:', text) // Plain text
// Output:
// Plain text: {"employee":[
//     {"firstname":"Rezoan", "age":"22"},
//     {"firstname":"Shakil", "age":"23"},
//     {"firstname":"Prince", "age":"24"}
// ]}

const jsonFormat = JSON.parse(text) // Test to JSON conversion
console.log('JSON format: ', jsonFormat)
// Output:
// JSON format:  {
//   employee: [
//     { firstname: 'Rezoan', age: '22' },
//     { firstname: 'Shakil', age: '23' },
//     { firstname: 'Prince', age: '24' }
//   ]
// }

// Accessing JSON data
console.log(jsonFormat.employee)
// Output:
// [
//   { firstname: 'Rezoan', age: '22' },
//   { firstname: 'Shakil', age: '23' },
//   { firstname: 'Prince', age: '24' }
// ]

console.log(jsonFormat.employee[0]) // Output: { firstname: 'Rezoan', age: '22' }
console.log(jsonFormat.employee[0].firstname) // Output: Rezoan

const textFormat = JSON.stringify(jsonFormat) // JSON to text (string) conversion
console.log('Text format:', textFormat)
// Output: Text format: {"employee":[{"firstname":"Rezoan","age":"22"},{"firstname":"Shakil","age":"23"},{"firstname":"Prince","age":"24"}]}

// Object to text (string) convertion. (Then I can convert JSON as well)
const person = {
    firstname: 'Prince',
    profession: 'BJIT',
}

console.log(JSON.stringify(person)) // Output: {"firstname":"Prince","profession":"BJIT"}