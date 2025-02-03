class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}

try {
    //var e = new DuplicityError('user already exists')
    var e = new NotFoundError('user not found')

    throw e
} catch (error) {
    if (error instanceof DuplicityError)
        console.log('TODO return status 409 from api')
    else if (error instanceof NotFoundError)
        console.log('TODO return status 404 from api')
    else
        console.log('TODO return status 400 from api')
}

//VM1283: 22 TODO return status 404 from api