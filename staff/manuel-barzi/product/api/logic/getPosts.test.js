import mongoose from 'mongoose'
import getPosts from './getPosts.js'

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        try {
            getPosts('67929ad1c3a1e47aeca030ae')
                .then(posts => console.log('posts gotten', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))