// Javascript is single threaded, synchronous language.
// Javascript executes line by line.

console.log(`I'm first`)
console.log(`I'm second`)
console.log(`I'm third`)

console.log(`I'm first`)
boilingWater()
console.log(`I'm third`)

function boilingWater() {
    console.log('boiling...')
    for (let i = 0; i < 5; i++) {
        console.log('still not done...')
    }
    console.log('done')
}

// --------------------------- Output: ---------------------------
// I'm first 
// I'm second
// I'm third
// I'm first
// boiling...
// still not done...
// still not done...
// still not done...
// still not done...
// still not done...
// done
// I'm third
