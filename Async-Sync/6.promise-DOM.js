const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    loader(1000, one, 'red')
        .then(() => loader(1000, two, 'blue'))
        .then(() => loader(1000, three, 'green'))
        .catch((error) => console.log(error))
})

function loader(timer, heading, colorValue) {
    return new Promise((resolve, reject) => {
        if (heading) {
            setTimeout(() => {
                heading.style.color = colorValue
                resolve()
            }, timer)
        } else {
            reject(new Error('There is an error'))
        }
    })
}
