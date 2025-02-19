const bcrypt = require('bcryptjs')

/* register */

// hashing

var name = 'Andrea'
var email = 'adrea@123.com'
var username = 'andrea123'
var password = 'holamundo'

var hashedPassword = bcrypt.hashSync(password)
console.log(hashedPassword)
// $2a$10$Usqi2LJL0yQ1yqYBI.UnAeWEMNWRyFad6ll/78AExZtr4f1FyfS9K (save this in db)

/* login */

var username = 'andrea123'
var password = 'holamundo'

var hashedPassword = '$2a$10$Usqi2LJL0yQ1yqYBI.UnAeWEMNWRyFad6ll/78AExZtr4f1FyfS9K' // from db
var match = bcrypt.compareSync(password, hashedPassword)
console.log(match)