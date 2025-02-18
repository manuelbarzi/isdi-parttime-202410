import 'dotenv/config'

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import logic from './logic/index.js'
import { errors } from 'com'

const { ValidationError, SystemError, DuplicityError, CredentialsError, NotFoundError, OwnershipError } = errors

const connectToDb = () => mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB connected'))

const startApi = () => {
    const api = express()

    const jsonBodyParser = express.json()

    api.use(cors())

    api.get('/', (req, res) => res.send('Hello, API!'))

    api.post('/users', jsonBodyParser, (req, res, next) => {
        try {
            const { name, email, username, password } = req.body

            logic.registerUser(name, email, username, password)
                .then(() => res.status(201).send())
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.post('/users/auth', jsonBodyParser, (req, res, next) => {
        try {
            const { username, password } = req.body

            logic.authenticateUser(username, password)
                .then(userId => {
                    const payload = { sub: userId }

                    const token = jwt.sign(payload, process.env.JWT_SECRET)

                    res.json(token)
                })
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.get('/users', (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7) // Bearer token

            const payload = jwt.verify(token, process.env.JWT_SECRET)

            const { sub: userId } = payload

            logic.getUserName(userId)
                .then(name => res.json(name))
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.get('/posts', (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7) // Bearer token

            const payload = jwt.verify(token, process.env.JWT_SECRET)

            const { sub: userId } = payload

            logic.getPosts(userId)
                .then(posts => res.json(posts))
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }

    })

    api.post('/posts', jsonBodyParser, (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7) // Bearer token

            const payload = jwt.verify(token, process.env.JWT_SECRET)

            const { sub: userId } = payload

            const { image, text } = req.body

            logic.createPost(userId, image, text)
                .then(() => res.status(201).send())
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.delete('/posts/:postId', (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7) // Bearer token

            const payload = jwt.verify(token, process.env.JWT_SECRET)

            const { sub: userId } = payload

            const { postId } = req.params

            logic.deletePost(userId, postId)
                .then(() => res.status(204).send())
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.patch('/posts/:postId/likes', (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7) // Bearer token

            const payload = jwt.verify(token, process.env.JWT_SECRET)

            const { sub: userId } = payload

            const { postId } = req.params

            logic.toggleLikePost(userId, postId)
                .then(() => res.status(204).send())
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.patch('/posts/:postId/text', jsonBodyParser, (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7) // Bearer token

            const payload = jwt.verify(token, process.env.JWT_SECRET)

            const { sub: userId } = payload

            const { postId } = req.params
            const { text } = req.body

            logic.updatePostText(userId, postId, text)
                .then(() => res.status(204).send())
                .catch(error => next(error))
        } catch (error) {
            next(error)
        }
    })

    api.use((error, req, res, next) => {
        if (error instanceof NotFoundError)
            res.status(404).json({ error: error.constructor.name, message: error.message })
        else if (error instanceof OwnershipError)
            res.status(403).json({ error: error.constructor.name, message: error.message })
        else if (error instanceof CredentialsError)
            res.status(401).json({ error: error.constructor.name, message: error.message })
        else if (error instanceof DuplicityError)
            res.status(409).json({ error: error.constructor.name, message: error.message })
        else if (error instanceof ValidationError)
            res.status(400).json({ error: error.constructor.name, message: error.message })
        else if (error instanceof SystemError)
            res.status(500).json({ error: error.constructor.name, message: error.message })
        else
            res.status(500).json({ error: SystemError.name, message: error.message })
    })

    api.listen(process.env.PORT, () => console.log(`API running on port ${process.env.PORT}`))
}

connectToDb()
    .then(() =>
        startApi()
    )
    .catch(error => console.error(error))