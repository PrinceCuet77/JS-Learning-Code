// ----------------- 89 -----------------
// returns a node object or node list, which is an array-like object.

// ----------------- 90 -----------------
// window object = browser api
// console.dir(document) -> Showing available properties regarding document object.

// ----------------- 91 -----------------
// Select the element or group of elements what I want.
// Decide the effect we want to apply to the selection.

const h1 = document.getElementById('h1')
h1.style.color = 'red'

// ----------------- 92 -----------------
// getElementsByTagName('tagname')
// Return HTMLCollection = array-like object

const h2 = document.getElementsByTagName('h2')
console.log(h2)
console.log(h2.length) // 2

// h1Tag is HTMLCollection which is array like. So, selection will be like -
h2[0].style.color = 'green' // Working because of HTMLCollection
h2[1].style.color = 'blue'

// another example
const li = document.getElementsByTagName('li')
console.log(li.length) // 5
li[1].style.fontSize = '20px' // Because of using HTMLCollection

// I can't use forEach in HTMLCollection but I can turn them into array - spread operator [...]
const betterLi = [...li]
betterLi.forEach((item) => {
    console.log(item)
    item.style.color = 'red' // Because of turning into array
})

console.log(li) // HTMLCollection
console.log(betterLi) // Array (Turn from HTMLCollection)

// ----------------- 93 -----------------
// getElementByClassName('classname')
// HTMLCollection
const listItem = document.getElementsByClassName('special')
console.log(listItem.length) // 3

// ----------------- 94 -----------------
// querySelector('any css') - selects single
// querySelector('#idName') - id
// querySelector('.className') - class
// querySelector('tagName') - tag
// querySelectorAll('any css') - selects all

// using id
const result = document.querySelector('#result')
console.log(result)

// using class
const last = document.querySelector('.last')
console.log(last)

const lilast = document.querySelector('li:last-child')
console.log(lilast)

// NodeList
const special = document.querySelectorAll('.special')
console.log(special.length)

// I can use forEach loop
special.forEach((item) => {
    console.log(item)
    item.style.color = 'yellow'
})

// ----------------- 95 -----------------
const idResult = document.querySelector('#result')

// childNodes - returns all childNodes including whitespace which is treated as a text node.
console.log(idResult) // I have unordered list and list items are children of that unordered list.
console.log(idResult.childNodes) // NodeList (can use forEach)
console.log(idResult.children) // HTMLCollection
console.log(idResult.firstChild) // text node
console.log(idResult.lastChild) // text node

// ----------------- 96 -----------------
const firstHeading = document.querySelector('.first-heading')
console.log(firstHeading.parentElement) // Call the parent of 'first-heading' class


// ----------------- 97 -----------------
const spl = document.querySelector('.special')
console.log(spl.nextSibling.nextSibling) // Use double 'nextSibling' because first 'nextSibling' points to 'text'

const spl_last = document.querySelector('.last')
console.log(spl_last.previousSibling.previousSibling) // Use double 'previousSibling' because first 'previousSibling' points to 'text'

// ----------------- 98 -----------------
console.log(spl.nextElementSibling) // Grab direct next element
console.log(spl_last.previousElementSibling) // Grab direct previous element

// ----------------- 99 -----------------
// Return the text value
const heading = document.getElementById('h1')
console.log(heading.innerHTML) // first way
console.log(heading.firstChild.nodeValue) // second way (remember: select the node otherwise return 'text')
console.log(heading.textContent) // thrid way

// ----------------- 100 -----------------
const link = document.querySelector('#link')
const idValue = link.getAttribute('id') // Get the id name
console.log(idValue)

const classValue = link.getAttribute('class') // Get the class name
console.log(classValue)

const href = link.getAttribute('href') // Get the attribute name
console.log(href)

link.setAttribute('class', 'f1') // Set the class
link.textContent = 'I have value' // Set the text content
console.log(link)