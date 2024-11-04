function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.concat = function (values) {
    var result = new Dorraymon

    // this -> Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4:'cherry', length: 5 }
    // values -> Dorraymon { 0: 'lettuce', 1: 'onion', 2: 'garlic', 3: 'carrot', 4: 'lentice', length: 5 }
    // result -> Dorramon { length: 0 }

    // result[0] = this[0]      // result -> Dorramon { 0: 'apple', length: 0 }
    // result.length++          // result -> Dorramon { 0: 'apple', length: 1 }

    // result[1] = this[1]      // result -> Dorramon { 0: 'apple', 1: 'orange', length: 1 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', length: 2 }

    // result[2] = this[2]      // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 2 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }

    // result[3] = this[3]      // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', length: 3 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', length: 4 }

    // result[4] = this[4]      // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', length: 4 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', length: 5 }

    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }

    // result[5] = values[0]    // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', length: 5 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', length: 6 }

    // result[6] = values[1]    // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', length: 6 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', length: 7 }

    // result[7] = values[2]    // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', length: 7 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', length: 8 }

    // result[8] = values[3]    // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', length: 8 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', length: 9 }

    // result[9] = values[4]    // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', 9: 'lentice', length: 9 }
    // result.length++          // result -> Dorramon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', 9: 'lentice', length: 10 }

    for (var i = 0; i < values.length; i++) {
        result[result.length] = values[i]
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