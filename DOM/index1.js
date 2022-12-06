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
const demo1 = document.querySelector('#demo1')
console.log(demo1.textContent) // Just showing the content of the 'div' tag
console.log(demo1.innerText) // Just showing the content of the 'div' tag
console.log(demo1.innerHTML) // Showing the content with related tags

// Adding the text with tags - use 'innerHTML'
// Must use `` while using 'innerHTML'
demo1.innerHTML = `<h1 id="prince">Heading 1 again</h1><h2>Heading 2 again</h2><h1>Heading 1 again</h1><h2>Heading 2 again</h2><h1>Heading 1 again</h1><h2>Heading 2 again</h2>`

const demo2 = document.getElementById('demo2')
// Showing the way I write inside ``.
demo2.textContent = `<h1>Heading 1 again</h1><h2>Heading 2 again</h2><h1>Heading 1 again</h1><h2>Heading 2 again</h2><h1>Heading 1 again</h1><h2>Heading 2 again</h2>`

// Working like 'textContent'
// demo2.innerText = `<h1>Heading 1 again</h1><h2>Heading 2 again</h2><h1>Heading 1 again</h1><h2>Heading 2 again</h2><h1>Heading 1 again</h1><h2>Heading 2 again</h2>`

// It doesn't effect because it has not no tag attached.
// demo2.textContent = 'Hello Prince'
// demo2.innerText = 'Hello'

// ----------------- 108 -----------------
// Using CSS style property
const prince = demo1.querySelector('#prince')

// console.log(prince)
// console.log(prince.textContent)

// Using CSS style property like that way
prince.style.color = 'red'
prince.style.backgroundColor = 'Black'
