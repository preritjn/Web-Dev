const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const resetButton = document.getElementById('reset')
let interval = null
let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

function stopWatch() {
    seconds++

    if(seconds / 60 === 1){
        seconds = 0
        minutes++

        if(minutes / 60 === 1){
            minutes = 0
            hours++
        }
    }

    if(seconds < 10)
        leadingSeconds = '0' + seconds.toString()
    else
        leadingSeconds = seconds
    

    if(minutes < 10)
        leadingMinutes = '0' + minutes.toString()
    else
        leadingMinutes = minutes
    

    if(hours < 10)
        leadingHours = '0' + hours.toString()
    else
        leadingHours = hours
    document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}

playButton.addEventListener('click',(e) => {
    if(!playButton.classList.contains('disabled')) {
        e.target.classList.toggle('disabled')
        e.target.parentElement.classList.toggle('disabled')
    }    
    if(pauseButton.classList.contains('disabled')) {
        pauseButton.classList.toggle('disabled')
        pauseButton.parentElement.classList.toggle('disabled')
    }
    interval = window.setInterval(stopWatch,1000)
})

pauseButton.addEventListener('click',(e) => {    
    if(!pauseButton.classList.contains('disabled')) {
        e.target.classList.toggle('disabled')
        e.target.parentElement.classList.toggle('disabled')
    }
    if(playButton.classList.contains('disabled')) {
        playButton.classList.toggle('disabled')
        playButton.parentElement.classList.toggle('disabled')
    }
    window.clearInterval(interval)
})

resetButton.addEventListener('click',(e) => {
    if(playButton.classList.contains('disabled')) {
        playButton.classList.toggle('disabled')
        playButton.parentElement.classList.toggle('disabled')
    }
    if(!pauseButton.classList.contains('disabled')) {
        pauseButton.classList.toggle('disabled')
        pauseButton.parentElement.classList.toggle('disabled')
    }
    window.clearInterval(interval)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('timer').innerText = `00:00:00`
})

