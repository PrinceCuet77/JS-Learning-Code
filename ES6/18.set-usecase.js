// new Set() - accepts iterable objects

const products = [
    {
        title: 'high-back bench',
        company: 'ikea',
    },
    {
        title: 'albany table',
        company: 'marcos',
    },
    {
        title: 'accent chair',
        company: 'caressa',
    },
    {
        title: 'wooden table',
        company: 'ikea',
    },
]

const companies = products.map((item) => item.company)
console.log(companies) // Output: [ 'ikea', 'marcos', 'caressa', 'ikea' ]

const uniqueCompanies = new Set(companies)
console.log(uniqueCompanies) // Output: Set(3) { 'ikea', 'marcos', 'caressa' }

const allCompanies = [...uniqueCompanies, 'all']
console.log(allCompanies) // Output: [ 'ikea', 'marcos', 'caressa', 'all' ]

// in one line
const allCompanies2 = [...new Set(products.map((item) => item.company)), 'all']
console.log(allCompanies2) // Output: [ 'ikea', 'marcos', 'caressa', 'all' ]
