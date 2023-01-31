function calculator(num1, num2, callback) {
    const sum = num1 + num2

    if ( callback ) callback(sum)
    else return sum
}

function display(value) {
    console.log('The result:', value)
} 

// Here, display is our callback function
calculator(1, 2, display)