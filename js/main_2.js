let arr = [
    {
        company: 'artel',
        budget: 1000,
        expenses: 500,
        tax: 13
    },
    {
        company: 'uztelecom',
        budget: 4000,
        expenses: 1700,
        tax: 13
    },
    {
        company: 'uzmotors',
        budget: 8000,
        expenses: 3500,
        tax: 13
    },
    {
        company: 'chopar',
        budget: 5000,
        expenses: 4000,
        tax: 13
    },
]

let middleExpenses = 0
let totalExpenses = 0

arr.filter(item => {
    item.expenses += item.budget / 100 * item.tax
    item.percent = item.expenses / (item.budget / 100)
    // middleExpenses = ((0 + item.expenses) / ((0 + item.budget) / 100)) / arr.length
    middleExpenses += item.expenses / arr.length
    totalExpenses += item.expenses
})
let morePays = arr.reduce((a, b) => {
    if (a.percent > b.percent) return a
    else return b
})

let lessPays = arr.reduce((a, b) => {
    if (a.percent < b.percent) return a
    else return b
})

console.log(morePays);
console.log(lessPays);
console.log(middleExpenses);
console.log(totalExpenses);