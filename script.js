let wordSeen = document.getElementById("wordSeen")
let btnBeen = document.getElementById('btnBeen')
let btnGone = document.getElementById('btnGone')
let btnSeen = document.getElementById('btnSeen')


btnSeen.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordSeen.innerHTML = 'seen'
    wordSeen.style.color = 'lime'
    btnSeen.style.background = 'lawngreen'
    btnSeen.style.color = 'green'
    btnSeen.disabled = 'true'
    btnBeen.disabled = 'true'
    btnGone.disabled = 'true'
})

btnBeen.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordSeen.innerHTML = 'been'
    wordSeen.style.color = 'red'
    btnBeen.style.background = 'red'
    btnBeen.disabled = 'true'
})

btnGone.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordSeen.innerHTML = 'gone'
    wordSeen.style.color = 'red'
    btnGone.style.background = 'red'
    btnGone.disabled = 'true'
})