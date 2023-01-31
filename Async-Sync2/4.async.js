const paymentSuccess = true
const marks = 80

function enroll() {
    console.log('Enrolling is in progress...')

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve()
            } else {
                resolve('Payment failed.')
            }
        }, 2000)
    })

    return promise
}

function progress() {
    console.log('Course on progress...')

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve()
            } else {
                reject('You could not get enough marks to get the certificate.')
            }
        }, 3000)
    })

    return promise
}

function getCertificate() {
    console.log('Your certificate is getting ready...')

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Congrats! You got the certificate.')
        }, 1000)
    })

    // Another syntax
    // const promise = Promise.resolve('Congrats! You got the certificate.')

    return promise
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then((message) => console.log(message))
    .catch((err) => console.log(err))
