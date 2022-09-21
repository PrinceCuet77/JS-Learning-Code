const randomValue = Math.floor(Math.random() * 10) // 0 to 9
const randomValue1 = Math.floor(Math.random() * 10 + 1) // 1 to 10
const randomValue2 = Math.ceil(Math.random() * 10) // 1 to 10

const date = new Date()
console.log(date) // Output: 2022-09-21T06:23:49.919Z

const day = date.getDay()
const month = date.getMonth()
const today = date.getDate()
const fullYear = date.getFullYear()

console.log(today, day, month, fullYear) // Output: 21 3 8 2022
