import mongoose from 'mongoose'
import getPosts from './getPosts.js'

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        try {
            getPosts('6797e266f58b89529b8bd2ec')
                .then(posts => console.log('posts gotten', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))