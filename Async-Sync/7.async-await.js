// Async/await
// await waits till promise is settled
// error handling - try/catch

// 1. syntax
// async function someFunction() {
//     await
// }

// 2. syntax
// const otherFunction = async() => {
//     await
// }

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => {
    try {
        const first = await loader(1000, one, 'red')
        console.log('first: ', first) // 'undefined' because I don't pass anything inside 'resolve'. If I pass 'hello' inside 'resolve' then I can grab 'hello' using 'first' variable.

        await loader(1000, two, 'blue')
        await loader(1000, three, 'green')
    } catch (error) {
        console.log(error)
    }
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

// async function returns a promise by default. The example is in index.js file.
