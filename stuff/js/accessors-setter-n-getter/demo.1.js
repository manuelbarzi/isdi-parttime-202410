/*
var peter = {}

peter.name = 'pETeR'

console.log(peter)
*/

var peter = {
    set name(name) {
        this.__name__ = name.toUpperCase()
    },

    get name() {
        return this.__name__
    }
}

peter.name = 'pETeR'

//console.log(peter)
console.log(peter.name)

