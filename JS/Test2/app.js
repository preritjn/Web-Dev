const content = document.querySelector('.content')

content.addEventListener('click', function(e) {
    e.target.classList.toggle('active')
    e.target.nextSibling.nextSibling.classList.toggle('active')
    console.log(e.target.nextSibling.nextSibling.classList);
})