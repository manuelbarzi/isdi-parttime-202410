const bcrypt = require('bcryptjs')

const password = '123123123'

const hash = bcrypt.hashSync(password, 10)

console.log(hash)

const match = bcrypt.compareSync(password, hash)

console.log(match)