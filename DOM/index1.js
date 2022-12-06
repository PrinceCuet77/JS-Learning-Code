// ----------------- 101 -----------------
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

// Get class name
const classValue = first.className
console.log('Showing the class name:', classValue)

// Gotcha: last added class will be active and others will remain inactive.
second.className = 'colors'
second.className = 'text'

// Other way (recommanded way) - Because both classes will be active.
// second.className = 'colors text' // Workable

// Similarity with
// second.setAttribute('class', 'colors')
// second.setAttribute('class', 'text')

// third.classList.add('colors')
// third.classList.add('text')

// Other way
third.classList.add('colors', 'text')
third.classList.remove('colors')

const flag = third.classList.contains('colors')
if (flag) {
    console.log('third has class - colors')
} else {
    console.log('third has no class - colors')
}

// ----------------- 102 -----------------
const result = document.getElementById('result')

// create empty element
const bodyDiv = document.createElement('div')

// create text node
const text = document.createTextNode('a simple body div')
bodyDiv.appendChild(text) // append as a child
result.appendChild(bodyDiv)
console.log(result.children)

// ----------------- 103 -----------------
// insertBefore('element', 'location')
const h2 = document.createElement('h2')
const text1 = document.createTextNode('Prince')
h2.append(text1)

document.body.insertBefore(h2, result)

// again (also work)
// const red = document.getElementById('red')
// result.insertBefore(h2, red)
// big-element.insertBefore('created-element', 'location (before)')

// ----------------- 104 -----------------
// replaceChild('new', 'old')

// creating new element
const text2 = document.createTextNode('Hello Prince')
const h3 = document.createElement('h3')
h3.appendChild(text2)
h3.classList.add('blue')

document.body.replaceChild(h3, h2)

// ----------------- 105 -----------------
// prepend, innerText
const heading = document.createElement('h2')
heading.innerText = `I am a dynamic heading`
document.body.prepend(heading)

// ----------------- 106 -----------------
// remove()
// removeChild('removedElement')
const demo = document.querySelector('#demo')
const demoHeading1 = demo.querySelector('h1') // Search just inside the 'demo' (faster way) not the whole 'document'
demoHeading1.remove() // remove that element

const demoHeading2 = demo.querySelector('h2')
demo.remove(demoHeading2)

// ----------------- 107 -----------------
// innerHTML, textContent


// ----------------- 108 -----------------
// ----------------- 109 -----------------
// ----------------- 110 -----------------
// ----------------- 111 -----------------
