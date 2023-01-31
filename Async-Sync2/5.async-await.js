// 1. 'async' function returns Promise by default.
// 2. Only inside 'async' function, I can use 'await' function.

const paymentSuccess = true
const marks = 80

function enroll() {
    console.log('Enrolling is in progress...')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve()
            } else {
                resolve('Payment failed.')
            }
        }, 2000)
    })
}

function progress() {
    console.log('Course on progress...')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve()
            } else {
                reject('You could not get enough marks to get the certificate.')
            }
        }, 3000)
    })
}

function getCertificate() {
    console.log('Your certificate is getting ready...')

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Congrats! You got the certificate.')
        }, 1000)
    })
}

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then((message) => console.log(message))
//     .catch((err) => console.log(err))

async function display() {
    try {
        await enroll()
        await progress()
        const message = await getCertificate()
        console.log(message)
    } catch (err) {
        console.log(err)
    }
}

display()
