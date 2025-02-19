import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User } from '../data/models.js'

import registerUser from './registerUser.js'

import { errors } from 'com'
const { DuplicityError } = errors

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.TEST_MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on new user', () => {
        return registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123')
            .then(result => {
                expect(result).to.be.undefined

                return User.findOne()
            })
            .then(user => {
                expect(user.name).to.equal('Peter Pan')
                expect(user.email).to.equal('peter@pan.com')
                expect(user.username).to.equal('peterpan')
                expect(user.password).to.equal('123123123')
            })
    })

    it('fails on existing user', () => {
        let catchedError

        return User.create({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })
            .then(() => registerUser('Wendy Darling', 'wendy@darling.com', 'wendydarling', '123123123'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(DuplicityError)
                expect(catchedError.message).to.equal('user already exists')
            })
    })

    afterEach(() => User.deleteMany())

    after(() => mongoose.disconnect())
})