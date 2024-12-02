var car = {
    set brand(brand) { throw new Error('cannot change brand') },
    get brand() { return 'ferrari' },

    set model(model) { throw new Error('cannot change model') },
    get model() { return '350' }
}

/*
car.brand = 'lambo'
car.model = 'diablo'
*/

console.log(car.brand, car.model)