console.log('TEST Array.prototype.find')

console.log('CASE find sponge bob in characters')

var characters = [
    { name: 'Mickey Mouse', icon: '🐭' },
    { name: 'Tweety', icon: '🐥' },
    { name: 'Sponge Bob', icon: '🧽' },
    { name: 'Coyote', icon: '🦊' }
]

var character = characters.find(function (character) {
    // if (character.name === 'Sponge Bob')
    //     return true

    // return false

    return character.name === 'Sponge Bob'
})

console.log(character)
// { name: 'Sponge Bob', icon: '🧽' }


console.log('CASE find pink panther in characters')

var characters = [
    { name: 'Mickey Mouse', icon: '🐭' },
    { name: 'Tweety', icon: '🐥' },
    { name: 'Sponge Bob', icon: '🧽' },
    { name: 'Coyote', icon: '🦊' }
]

var character = characters.find(function (character) {
    // if (character.name === 'Pink Panther')
    //     return true

    // return false

    return character.name === 'Pink Panther'
})

console.log(character)
// undefined