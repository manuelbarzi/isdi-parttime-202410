var root = document.body.querySelector('#root')

var trump = document.createElement('div')
trump.style.width = '70px'
trump.style.height = '140px'
// trump.style.backgroundColor = 'red'
trump.style.position = 'absolute'
root.appendChild(trump)

var trumpFaceImage = document.createElement('img')
trumpFaceImage.src = 'images/trump.png'
trumpFaceImage.style.width = '50px'
trumpFaceImage.style.position = 'absolute'
trumpFaceImage.style.zIndex = 1
trumpFaceImage.style.left = '20px'
trumpFaceImage.style.top = '18px'
trump.appendChild(trumpFaceImage)

var trumpFaceKissImage = document.createElement('img')
trumpFaceKissImage.src = 'images/trump-kiss.png'
trumpFaceKissImage.style.width = '65px'
trumpFaceKissImage.style.position = 'absolute'
trumpFaceKissImage.style.zIndex = 1
trumpFaceKissImage.style.left = '15px'
trumpFaceKissImage.style.top = '14px'
// trump.appendChild(trumpFaceKissImage)

var trumpBodyImage = document.createElement('img')
trumpBodyImage.src = 'images/trump-body.png'
trumpBodyImage.style.width = '100px'
trumpBodyImage.style.position = 'absolute'
trumpBodyImage.style.left = '-10px'
trumpBodyImage.style.top = '50px'
trump.appendChild(trumpBodyImage)

var trumpCoords = {
    x: 0,
    y: 0
}
trump.style.left = trumpCoords.x + 'px'
trump.style.top = trumpCoords.y + 'px'

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        trump.removeChild(trumpFaceImage)
        trump.appendChild(trumpFaceKissImage)
    } else if (event.key === 'n') {
        trump.removeChild(trumpFaceKissImage)
        trump.appendChild(trumpFaceImage)
    } else if (event.key === 'ArrowUp') {
        trumpCoords.y -= STEP

        trump.style.top = trumpCoords.y + 'px'
    } else if (event.key === 'ArrowDown') {
        trumpCoords.y += STEP

        trump.style.top = trumpCoords.y + 'px'
    } else if (event.key === 'ArrowLeft') {
        trumpCoords.x -= STEP

        trump.style.left = trumpCoords.x + 'px'
    } else if (event.key === 'ArrowRight') {
        trumpCoords.x += STEP

        trump.style.left = trumpCoords.x + 'px'
    }
})