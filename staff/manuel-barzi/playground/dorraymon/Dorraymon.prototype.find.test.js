const Dorraymon = require('./Dorraymon')

console.log('TEST Dorraymon.prototype.find')

console.log('CASE find sponge bob in characters')

{
    const characters = new Dorraymon
    characters[0] = { name: 'Mickey Mouse', icon: '🐭' }
    characters[1] = { name: 'Tweety', icon: '🐥' }
    characters[2] = { name: 'Sponge Bob', icon: '🧽' }
    characters[3] = { name: 'Coyote', icon: '🦊' }
    characters.length = 4

    const character = characters.find(function (character) {
        return character.name === 'Sponge Bob'
    })

    console.log(character)
    // { name: 'Sponge Bob', icon: '🧽' }
}

console.log('CASE find pink panther in characters')

{
    const characters = new Dorraymon
    characters[0] = { name: 'Mickey Mouse', icon: '🐭' }
    characters[1] = { name: 'Tweety', icon: '🐥' }
    characters[2] = { name: 'Sponge Bob', icon: '🧽' }
    characters[3] = { name: 'Coyote', icon: '🦊' }
    characters.length = 4

    const character = characters.find(function (character) {
        return character.name === 'Pink Panther'
    })

    console.log(character)
    // undefined
}