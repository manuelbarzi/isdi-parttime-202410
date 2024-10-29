function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.some = function (condition) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var fulfills = condition(element)

        if (fulfills) return true
    }

    return false
}

console.log('TEST Dorraymon.prototype.some')

console.log('CASE check sponge bob is in characters')

var characters = new Dorraymon
characters[0] = { name: 'Mickey Mouse', icon: '🐭' }
characters[1] = { name: 'Tweety', icon: '🐥' }
characters[2] = { name: 'Sponge Bob', icon: '🧽' }
characters[3] = { name: 'Coyote', icon: '🦊' }
characters.length = 4

var present = characters.some(function (character) {
    return character.name === 'Sponge Bob'
})

console.log(present)
// true

console.log('CASE check pink panther is in characters')

var characters = new Dorraymon
characters[0] = { name: 'Mickey Mouse', icon: '🐭' }
characters[1] = { name: 'Tweety', icon: '🐥' }
characters[2] = { name: 'Sponge Bob', icon: '🧽' }
characters[3] = { name: 'Coyote', icon: '🦊' }
characters.length = 4

var present = characters.some(function (character) {
    return character.name === 'Pink Panther'
})

console.log(present)
// false