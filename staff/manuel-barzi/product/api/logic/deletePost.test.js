import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('67929ad1c3a1e47aeca030ae', '67929da0b0117def4f5757b7')
                .then(result => console.log('post deleted', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))