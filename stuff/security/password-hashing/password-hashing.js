/* register */

var name = 'Andrea'
var email = 'adrea@123.com'
var username = 'andrea123'
var password = 'holamundo'

// en la db
// { name: 'Andrea', email: 'adrea@123.com', username: 'andrea123', password: 'holamundo' }

// usando un hasheador de passwords (ej: algoritmo de desplazar caracteres una posición)
// password 'holamundo' -> 'ipmbnvoep'
// { name: 'Andrea', email: 'adrea@123.com', username: 'andrea123', password: 'ipmbnvoep' }

/* login */

var username = 'andrea123'
var password = 'holamundo'

// usando un hasheador de passwords (ej: algoritmo de desplazar caracteres una posición)
// password 'holamundo' -> 'ipmbnvoep'
// compara 'ipmbnvoep' con la que hay en base de datos
// si coincide -> chachi piruli, devuelve session; si no, error de credenciales