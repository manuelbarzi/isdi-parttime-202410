import mongoose from 'mongoose'
import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            toggleLikePost('6797e308f58b89529b8bd2ee', '67aba55302fc7afa951a6fda')
                .then(result => console.log('post like toggled', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))