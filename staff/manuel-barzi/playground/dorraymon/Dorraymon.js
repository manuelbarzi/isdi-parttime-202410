class Dorraymon {
    constructor() {
        this.length = 0
    }

    at(index) {
        if (index < 0) {
            const newIndex = this.length + index

            return this[newIndex]
        } else return this[index]
    }

    find(condition) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            const fulfills = condition(element)

            if (fulfills) return element
        }

        //return undefined
    }
}

module.exports = Dorraymon