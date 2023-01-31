const paymentSuccess = true
const marks = 80

function enroll(callback) {
    console.log('Enrolling is in progress...')

    setTimeout(function () {
        if (paymentSuccess) {
            callback()
        } else {
            console.log('Payment failed.')
        }
    }, 2000)
}

function progress(callback) {
    console.log('Course on progress...')

    setTimeout(function () {
        if (marks >= 80) {
            callback()
        } else {
            console.log(
                'You could not get enough marks to get the certificate.'
            )
        }
    }, 3000)
}

function getCertificate() {
    console.log('Your certificate is getting ready...')

    setTimeout(function () {
        console.log('Congrats! You got the certificate.')
    }, 1000)
}

// Using anonymous function
// enroll(function () {
//     progress(getCertificate)
// })

// Using arrow function
enroll(() => {
    progress(getCertificate)
})

// Note:
// 1. 'enroll' function is taking a callback function.
// 2. That callback function is using parameter.
// 3. So, I need to use line 38 format to pass parameter.
// 4. Similarly, if 'getCertificate' function is using parameter then will do it again.
