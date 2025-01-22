var john = {
    name: 'John',
    home: {
        address: 'Mathew st',
        city: 'Liverpool'
    },
    guitars: ['fender', 'spanish', 'cuban']
}

//const { home: { address: direccion }, guitars: {2: guitar }} = john
const { home: { address: direccion }, guitars: [, , guitar] } = john
console.log(direccion, guitar)