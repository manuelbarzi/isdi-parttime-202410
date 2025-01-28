/*
var pedirPasearPerro = () => {
    console.log('pedir pasear perro')
    
    setTimeout(() => console.log('verificar perro contento'), Math.random() * 10)
}

var pedirPaqueteAmazon = () => {
    console.log('pedir paquete amazon')
    
    setTimeout(() => {
        console.log('revisar paquete amazon')
    
        console.log('pegarme una ducha')    
    }, Math.random() * 10)
}

pedirPasearPerro()
pedirPaqueteAmazon()

console.log('procesar mi foto')
console.log('tomarme un cafe')
*/

/*
var pedirPasearPerro = () => {
    console.log('pedir pasear perro')
    
    setTimeout(() => console.log('verificar perro contento'), Math.random() * 10)
}

var pedirPaqueteAmazon = () => {
    console.log('pedir paquete amazon')
    
    setTimeout(() => {
        console.log('revisar paquete amazon')
    
        pedirPasearPerro()
    
        console.log('pegarme una ducha')    
    }, Math.random() * 10)
}

pedirPaqueteAmazon()

console.log('procesar mi foto')
console.log('tomarme un cafe')
*/

var setTimeoutPromised = delay => new Promise((resolve, reject) => setTimeout(resolve, delay))

var pedirPasearPerro = () => {
    console.log('pedir pasear perro')

    return setTimeoutPromised(Math.random() * 10)
        .then(() => console.log('verificar perro contento'))
}

var pedirPaqueteAmazon = () => {
    console.log('pedir paquete amazon')

    return setTimeoutPromised(Math.random() * 10)
        .then(() => console.log('revisar paquete amazon'))
}

pedirPasearPerro()
pedirPaqueteAmazon()
    .then(() => console.log('pegarme una ducha'))

console.log('procesar mi foto')
console.log('tomarme un cafe')

/*
var setTimeoutPromised = delay => new Promise((resolve, reject) => setTimeout(resolve, delay))

var pedirPasearPerro = () => {
    console.log('pedir pasear perro')
    
    return setTimeoutPromised(Math.random() * 10)
            .then(() => console.log('verificar perro contento'))
}

var pedirPaqueteAmazon = () => {
    console.log('pedir paquete amazon')
    
    return setTimeoutPromised(Math.random() * 10)
            .then(() => console.log('revisar paquete amazon'))
}

pedirPaqueteAmazon()
    .then(() => {
        pedirPasearPerro()
            
        console.log('pegarme una ducha')
    })

console.log('procesar mi foto')
console.log('tomarme un cafe')
*/