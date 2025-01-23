import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('67929ad1c3a1e47aeca030ae', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp', 'hello neverland')
                .then(result => console.log('post created', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))