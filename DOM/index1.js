// ----------------- 101 -----------------
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

// Get class name
const classValue = first.className
console.log("Showing the class name:", classValue)

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
// ----------------- 104 -----------------
// ----------------- 105 -----------------
// ----------------- 106 -----------------
// ----------------- 107 -----------------
// ----------------- 108 -----------------
// ----------------- 109 -----------------
// ----------------- 110 -----------------
// ----------------- 111 -----------------
