// PROMISES - Pending, Resolved, Rejected
// then, catch - pass another callback

// Why use 'Promise'?
// Answer: If I call 'setTimeout' multiple times inside another 'setTimeout' function, so the code looks terrible and quite impossible to handle.
//          So, Promise is needed.

// 1. Must use 'new' before 'Promise'
// 2. Inside the Promise, a callback-function is used.
// 3. Callback-function is using two functions as a parameter. I can give any name but convension is to use 'resolve' and 'reject'
// 4. If I don't use 'resolve' and 'reject' then the 'Promise' will be in 'Pending' status.
const promise = new Promise((resolve, reject) => {
    let value = false
    if (value) {
        resolve('The value is true') // I can pass anything I want like: resolve([1, 2, 3])
    } else {
        reject('The value is false so that it will show an error') // Passing the error message
    }
})

promise
    .then((data) => {
        // to catch whatever I pass using resolve function from a promise, either it may be array, object etc.
        console.log(data)
    })
    .catch((data) => {
        // to catch the error message I pass using reject function from a promise
        console.log(data)
    })

// Another syntax:
// new Promise((resolve, reject) => {}).then(() => {}).catch(() => {})
// new Promise(callback-function).then(callback-function).catch(callback-function)
