document.body.addEventListener('keyup', (event)=> {
    SongEvent(event.code.toLowerCase())
})

function SongEvent(sound) {
    let songElement = document.querySelector(`#s_${sound}`)
    let Keyelement = document.querySelector(`div[data-key="${sound}"]`)

    if(songElement) {
        songElement.play()
        songElement.currentTime = 0
    }
    if(Keyelement) {
        Keyelement.classList.add('active')
        setTimeout( ()=> {
            Keyelement.classList.remove('active')
        },250)
    }
}
document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value

    if(song !== '') {
        let songArray = song.split('')
        playComposition(songArray)
    }
})
function playComposition(songArray) {
    let wait = 0

    for(let playItem of songArray) {
        setTimeout( ()=> {
            SongEvent(`key${playItem}`)
        }, wait)
        
        wait += 250
    }
}

