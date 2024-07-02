const lightButton = document.querySelector('.lightButton')
const light = document.querySelector('.light')
console.log(lightButton);
console.log(light);

lightButton.addEventListener('click', () => {
    light.classList.toggle('active')
    document.querySelector('span').classList.toggle('active')
    lightButton.classList.toggle('active')

})