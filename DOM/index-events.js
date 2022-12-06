// ----------------- 110 -----------------
// Click Event
const h1 = document.querySelector('h1')
const btn = document.querySelector('#btn')

// 1. Using arrow function as callback function
btn.addEventListener('click', () => {
    // I can do whatever I want to do.
    console.log('clicked')
})

// 2. Using anonymous function as callback funciton
// btn.addEventListener('click', function() {
// TODO
// })

// ----------------- 111 -----------------
const btn1 = document.querySelector('#btn1')

function clickMe() {
    console.log('Click event with function reference')
}

// Must pass function reference
btn1.addEventListener('click', clickMe)

// ----------------- 112 -----------------
// Mouse Event
// click = fires after full action occurs (after down, then up, then click)
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('mousedown', () => {
    console.log('Mouse down')
})

btn2.addEventListener('mouseup', () => {
    console.log('Mouse up')
})

btn2.addEventListener('mouseenter', () => {
    console.log('Mouse enter')
})

btn2.addEventListener('mouseleave', () => {
    console.log('Mouse leave')
})

// ----------------- 113 -----------------
// Key Event
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
const nameInput = document.querySelector('#name')
nameInput.addEventListener('keypress', () => {
    console.log('Key press')
})

nameInput.addEventListener('keydown', () => {
    console.log('Key down')
})

nameInput.addEventListener('keyup', () => {
    console.log('Key up')
})

// ----------------- 114 -----------------
// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyboard
// preventDefault() -  prevents default behaviour
const btn3 = document.querySelector('#btn3')
const link = document.querySelector('#link')
const h2 = document.querySelector('#h2')

// Use of 'event' parameter
btn3.addEventListener('click', function (event) {
    // console.log(event)
    console.log(this) // Output: Output: <button id="btn3">Click Me for Event Object</button>
    console.log(event.type) // Output: click
    console.log(event.currentTarget) // Output: <button id="btn3">Click Me for Event Object</button>
})

// In anonymous function and reference function, 'this' keyword act like 'event.currentTarget' parameter.
// But in arrow function, 'this' keyword will act like 'window' object.

// Use of 'event' parameter in reference function
function someFunction(e) {
    console.log(this) // Output: <a href="#" id="link">random link</a>
    e.preventDefault() // Stop moving to the another page or stop moving re-submit behaviour
}

link.addEventListener('click', someFunction)

h2.addEventListener('click', (e) => {
    console.log(this) // Pointing to 'window' object. So, in that time, just because of using arrow function, 'this' and 'event.currentTarget' is not pointing to the same situation.
    console.log(e.currentTarget) // Output: <h2 id="h2">No activity for 'this' keyword</h2>
})

// ----------------- 115 -----------------
// currentTarget - always refers to the element to which the event handler has been attached to.
// target - indentifies the element on which the event occured.

const btns = document.querySelectorAll('.first')
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log('Current Target:', e.currentTarget)
        console.log('Target:', e.target)
        e.target.style.color = 'green'

        // Scenario: 1
        // If I click 'second button more nested' full,
        // then, e.currentTarget - <button class="first">second <strong>button <strong>more nested</strong></strong></button>
        // and, e.target - <button class="first">second <strong>button <strong>more nested</strong></strong></button>

        // Scenario: 2
        // If I click 'second button more nested' partial like 'button more nested',
        // then, e.currentTarget - <button class="first">second <strong>button <strong>more nested</strong></strong></button>
        // and, e.target - <strong>button <strong>more nested</strong></strong>

        // Scenario: 3
        // If I click 'second button more nested' partial like 'more nested',
        // then, e.currentTarget - <button class="first">second <strong>button <strong>more nested</strong></strong></button>
        // and, e.target - <strong>more nested</strong>
    })
})

// ----------------- 116 -----------------
// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up - default
// event capturing - fires at the root and fires until reaches target
