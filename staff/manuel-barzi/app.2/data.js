function uuid() {
    return (Date.now() + Math.random()).toString(36).replace('.', '')
}

var users = []

users.push({
    id: uuid(),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
})

users.push({
    id: uuid(),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123123123'
})

