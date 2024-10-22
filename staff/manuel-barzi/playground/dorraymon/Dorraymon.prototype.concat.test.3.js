function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.concat = function (values, values2, values3) {
    var result = new Dorraymon

    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }

    for (var i = 0; i < values.length; i++) {
        result[result.length] = values[i]
        result.length++
    }

    if (arguments.length >= 2)
        for (var i = 0; i < values2.length; i++) {
            result[result.length] = values2[i]
            result.length++
        }

    if (arguments.length >= 3)
        for (var i = 0; i < values3.length; i++) {
            result[result.length] = values3[i]
            result.length++
        }

    return result
}

console.log('TEST Dorraymon.prototype.concat')

console.log('CASE merge fruits and veggies')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits[3] = 'banana'
fruits[4] = 'cherry'
fruits.length = 5
var veggies = new Dorraymon
veggies[0] = 'lettuce'
veggies[1] = 'onion'
veggies[2] = 'garlic'
veggies[3] = 'carrot'
veggies[4] = 'lentice'
veggies.length = 5
var food = fruits.concat(veggies)
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4:'cherry', length: 5 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', 2: 'garlic', 3: 'carrot', 4: 'lentice', length: 5 }
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4:'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', 9: 'lentice', length: 10 }


console.log('CASE merge fruits and veggies and meats')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var veggies = new Dorraymon
veggies[0] = 'lettuce'
veggies[1] = 'onion'
veggies.length = 2
var meats = new Dorraymon
meats[0] = 'cow'
meats[1] = 'salmon'
meats[2] = 'pig'
meats.length = 3
var food = fruits.concat(veggies, meats)
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
console.log(meats)
// Dorraymon { 0: 'cow', 1: 'salmon', 2: 'pig', length: 3 }
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'lettuce', 4: 'onion', 5: 'cow', 6: 'salmon', 7: 'pig', length: 8 }


console.log('CASE merge fruits and veggies and meats and milkies')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var veggies = new Dorraymon
veggies[0] = 'lettuce'
veggies[1] = 'onion'
veggies.length = 2
var meats = new Dorraymon
meats[0] = 'cow'
meats[1] = 'salmon'
meats[2] = 'pig'
meats.length = 3
var milkies = new Dorraymon
milkies[0] = 'cheese'
milkies[1] = 'yogurt'
milkies.length = 2
var food = fruits.concat(veggies, meats, milkies)
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
console.log(meats)
// Dorraymon { 0: 'cow', 1: 'salmon', 2: 'pig', length: 3 }
console.log(milkies)
// Dorraymon { 0: 'cheese', 1: 'yogurt', length: 2 }
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'lettuce', 4: 'onion', 5: 'cow', 6: 'salmon', 7: 'pig', 8: 'chees', 9: 'yogurt', length: 10 }