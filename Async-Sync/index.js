const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const url = 'https://source.unsplash.com/random'
// const errorUrl = 'https://source.unsplash.com' // Will show errors

btn.addEventListener('click', () => {
    console.log('click')
    loadImage(url)
        .then((data) => {
            console.log(data)
            container.appendChild(data)
        })
        .catch((err) => {
            console.log(err)
        })
})

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image() // Image constructor
        img.src = url
        img.addEventListener('load', () => {
            resolve(img)
        })

        img.addEventListener('error', () => {
            reject(new Error(`Failed to load image from the source : ${url}`))
        })
    })
}
