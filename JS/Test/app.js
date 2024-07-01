const closeButton = document.getElementById('btn-close')
const opneButton = document.getElementById('btn-open')
const container = document.querySelector('.container')

opneButton.addEventListener('click',() => {
    container.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    container.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === container)
        container.style.display = 'none'

})