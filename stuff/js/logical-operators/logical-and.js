// CASE 1: true and true => true (1 * 1 => 1)
// CASE 2: true and false => false (1 * 0 => 0)
// CASE 3: false and true => false (0 * 1 => 0)
// CASE 4: false and false => false (0 * 0 => 0)

// CASE 1
function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return true
}

console.log(a() && b())
// VM19494: 2 a
// VM19494: 8 b
// VM19494: 13 true

// CASE 2
function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return false
}

console.log(a() && b())
// VM19697:2 a
// VM19697:8 b
// VM19697:13 false

// CASE 3
function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return true
}

console.log(a() && b())
// VM19808:2 a
// VM19808:13 false

// CASE 4
function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return false
}

console.log(a() && b())
// VM19900:2 a
// VM19900:13 false