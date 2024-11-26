const localStorage = require('../data/locaStorage')
const sessionStorage = require('../data/sessionStorage')

const getUserName = () => {
    const users = JSON.parse(localStorage.users)

    const user = users.find(user => user.id === sessionStorage.userId)

    if (!user) throw new Error('user not found')

    return user.name
}

module.exports = getUserName