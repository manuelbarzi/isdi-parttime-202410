import 'dotenv/config'
import { expect } from 'chai'

import mongoose from 'mongoose'
import { User, Post } from '../data/models.js'

import createPost from './createPost.js'

import { errors } from 'com'
const { NotFoundError } = errors

const { Types: { ObjectId } } = mongoose

describe('createPost', () => {
    before(() => mongoose.connect(process.env.TEST_MONGO_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Post.deleteMany()]))

    it('succeeds on existing user', () => {
        return User.create({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' })
            .then(user => {
                return createPost(user._id.toString(), 'https://www.image.com/123', 'hello world')
                    .then(result => {
                        expect(result).to.be.undefined

                        return Post.findOne()
                    })
                    .then(post => {
                        expect(post.author.toString()).to.equal(user._id.toString())
                        expect(post.image).to.equal('https://www.image.com/123')
                        expect(post.text).to.equal('hello world')
                    })
            })
    })

    it('fails on wrong user id', () => {
        let catchedError

        return User.create({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' })
            .then(user => createPost(new ObjectId().toString(), 'https://www.image.com/123', 'hello world'))
            .catch(error => catchedError = error)
            .finally(() => {
                expect(catchedError).to.be.instanceOf(NotFoundError)
                expect(catchedError.message).to.equal('user not found')
            })
    })

    // ...

    afterEach(() => Promise.all([User.deleteMany(), Post.deleteMany()]))

    after(() => mongoose.disconnect())
})