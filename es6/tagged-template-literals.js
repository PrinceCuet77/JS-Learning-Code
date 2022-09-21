const author = 'Some Author'
const statement = 'Some Statement'

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`
console.log(quote)
// Output:
// Here is the , by , and it could not be more true <bold>Some Statement</bold>Here is the , by , and it could not be more true <bold>Some Author</bold>Here is the , by , and it could not be more true <bold></bold>

// Extra coding
// const result = document.getElementById('result')
// result.innerHTML = quote

function highlight(text, ...vars) {
    console.log(text)
    console.log(vars)

    const awesomeText = text.map((item, index) => {
        return `${text} <i>${vars[index] || ''}</i>`
    })

    return awesomeText.join('')
}
