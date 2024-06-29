let btn = document.querySelector('#btn')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Alan Alda"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    }
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    author.innerText = quotes[random].author
})