function registerUser(name, email, username, password) {
    var found = users.some(function (user) {
        return user.email === email || user.username === username
    })

    if (found)
        throw new Error('user already exists')

    var user = {}
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)
}

function loginUser(username, password) {
    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (!user)
        throw new Error('wrong credentials')

    return user
}