// 90
// window object = browser api
// console.dir(document) -> Showing available properties regarding document object

// 91
// Select the element or group of elements
// Decide the effect we want to apply to the selection

const h1 = document.getElementById('title')
h1.style.color = 'red'

// 92
// getElementByTagName('tagname')
// HTMLCollection = array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties

const headings = document.getElementsByTagName('h2')
console.log(headings) // Output: HTMLCollection(2) [h2, h2]

newHeadings = [...headings]

newHeadings.forEach((item) => {
    console.log(item) // h2
})

console.log(newHeadings) // Output: (2) [h2, h2]

// 93
// getElementByClassName('classname')
// HTMLCollection

const listItem = document.getElementsByClassName('special')
console.log(listItem) // Output: HTMLCollection(3) [li.special, li.special, li.special]

// 94
// querySelector('any css') - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result') // id
result.style.backgroundColor = 'blue'

const item = document.querySelector('.special') // class name
console.log(item) // Output: li.special

const lastItem = document.querySelector('li:last-child') // tag
console.log(lastItem) // Output: <li class="special">tomato</li>

const lists = document.querySelectorAll('.special')
console.log(lists) // NodeList(3) [li.special, li.special, li.special]

lists.forEach((item) => {
    item.style.color = 'white'
})

// 95
// childNodes - returns all childNodes including whitespace which is treated as a text node.
// children - returns only actual children
// firstChild
// lastchild

const result1 = document.querySelector('#result')
const allChildren = result1.childNodes
console.log(allChildren) // Output: NodeList(11) [text, li.special, text, li, text, li.special, text, li, text, li.special, text]

const children = result1.children
console.log(children) // Output: HTMLCollection(5) [li.special, li, li.special, li, li.special]

const first = result1.firstChild
console.log(first) // Output: #text

const last = result1.lastChild
console.log(last) // Output: #text

// 96
// parentElement
const parent = result1.parentElement
console.log(parent) // Output: <body></body>

// 97
// previousSibling
// nextSibling
// return whitespace

const sibling = document.querySelector('.siblings')
console.log(sibling.nextSibling) // Output: #text
console.log(sibling.nextSibling.nextSibling) // Output: <li>pear</li>

console.log(sibling.previousSibling) // Output: #text
console.log(sibling.previousSibling.previousSibling) // Output: <li>orange</li>

// 98
// previousElementSibling
// nextElementSibling
console.log(sibling.nextElementSibling) // Output: <li>pear</li>
console.log(sibling.previousElementSibling) // Output: <li>orange</li>

// 99
// nodeValue
// textContent
const newValue = document.getElementById('title')
const value1 = newValue.firstChild.nodeValue
console.log(value1)

const easyValue = newValue.textContent
console.log(easyValue)

// 100
// getAttribute()
// setAttribute()

const first1 = document.querySelector('.className')
const classValue = first1.getAttribute('class') // Retrieve class name
console.log(classValue)

const idValue = first1.getAttribute('id') // Retrieve id name
console.log(idValue)

const linkValue = document.getElementById('link')
const showLink = linkValue.getAttribute('href')
console.log(showLink)

const lastValue = link.nextElementSibling
lastValue.setAttribute('class', 'first')
lastValue.textContent = 'I also have a class of first'
console.log(lastValue)
