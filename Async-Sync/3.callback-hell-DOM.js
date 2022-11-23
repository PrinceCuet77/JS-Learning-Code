const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    loader()
})

function loader() {
    setTimeout(() => {
        one.style.color = 'red'

        setTimeout(() => {
            two.style.color = 'blue'

            setTimeout(() => {
                three.style.color = 'green'
            }, 1000)
        }, 1000)
    }, 1000)
}

// setTimeout function is called for multiple times. It creates the code complexity.