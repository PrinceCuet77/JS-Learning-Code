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
// event object argument event
// info about triggered event
// event.type
// event.currentTarget
// this keyboard
// preventDefault() -  prevents default behaviour
