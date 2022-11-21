// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const promise = new Promise((resolve, reject) => {
    let value = false
    if (value) {
        resolve('The value is true')
    } else {
        reject('The value is false so that it will show an error')
    }
})

promise
    .then((data) => {
        console.log(data)
    })
    .catch((data) => {
        console.log(data)
    })
