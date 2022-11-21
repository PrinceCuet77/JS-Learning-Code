// --------------------------- Make Soup ---------------------------
// chop onion
// chop carrots
// boil water 10 min
// add carrots boil for 5 min
// add onion boil for 5 min

// --------------------------- The efficient way (work on background) ---------------------------
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min

// BROWSER!!! Fetch Data, Fet Geolocation, setTimeout, setTime etc.

boilingWater()
console.log('chop carrots')

function boilingWater() {
    console.log('boiling...')

    // setTimeout(callback-function, minimum-time) - minimum time in milisecond, after the time I mensioned the callback-function will call if JS is free to call that function otherwise it will wait. After finishing other task, JS will call that callback-function.

    setTimeout(() => {
        console.log('boiling done.')
        console.log('add carrots')
        console.log('again boiling...')
        console.log('chop onions')

        setTimeout(() => { // After 10 second, a new timer will come to run. That's why, I set a new timer insider the callback-function.
            console.log('carrots boiling done')
            console.log('add onions')

            setTimeout(() => {
                console.log('onions boiling done')
            }, 5000) // How long I will run - 5 sec or 5000 milisecond
        }, 5000)
    }, 10000)
}

// --------------------------- output: ---------------------------
// boiling...
// chop carrots
// boiling done.
// add carrots
// again boiling...
// chop onions
// carrots boiling done
// add onions
// onions boiling done
