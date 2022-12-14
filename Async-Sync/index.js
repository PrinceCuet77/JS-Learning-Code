// 'async' function is returning a 'Promise' by default.

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => {
    const result = await display()
    console.log(result) // If I don't return anything from 'display' function then 'result' will show undefined. But now printing 'Prince' because of I return 'Prince' from 'display' function.
})

// Return a 'Promise'.
async function display() {
    try {
        const first = await loader(1000, one, 'red')
        console.log('first: ', first) // 'undefined' because I don't pass anything inside 'resolve'. If I pass 'hello' inside 'resolve' then I can grab 'hello' using 'first' variable.

        await loader(1000, two, 'blue')
        await loader(1000, three, 'green')
    } catch (error) {
        console.log(error)
    }

    return 'Prince' // kind of resolve('Prince') because 'async' function returns 'Promise' by default.
}

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
