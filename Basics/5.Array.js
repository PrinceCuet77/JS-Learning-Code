const val = ['Rezoan', 22, true, null, undefined]

// Accessing the value of an array
console.log(val[1])

// Assigning the value to another variable
const x = val[0]
console.log(x, val[0])

// Update the value of an array
console.log('Before update: ' + val[2])
val[2] = false
console.log('After update: ' + val[2])

// I can use like that
const a = 2,
    b = 3
const newVal = [a, b]
console.log(newVal)
console.log(newVal[0])
