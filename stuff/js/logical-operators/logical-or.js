// CASE 1: true or true => true (1 + 1 => 1)
// CASE 2: true or false => true (1 + 0 => 1)
// CASE 3: false or true => true (0 + 1 => 1)
// CASE 4: false or false => false (0 + 0 => 0)

// CASE 1
function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return true
}

console.log(a() || b())
// VM18502:2 a
// VM18502:13 true

// CASE 2
function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return false
}

console.log(a() || b())
// VM18893: 2 a
// VM18893: 13 true

// CASE 3
function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return true
}

console.log(a() || b())
// VM19032:2 a
// VM19032:8 b
// VM19032:13 true

// CASE 4
function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return false
}

console.log(a() || b())
// VM19141:2 a
// VM19141:8 b
// VM19141:13 false