import mongoose from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => Promise.all([User.deleteMany(), Post.deleteMany()]))
    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
        const post = new Post({ author: pepito._id, image: 'https://fbi.cults3d.com/uploaders/12888752/illustration-file/302725c9-6bea-4a51-94a6-78bdc672e410/jiminy-anglea1.jpg', text: 'hat off!' })

        return Promise.all([pepito.save(), post.save()])
    })
    .then(([pepito, post]) => {
        console.log('user saved', pepito._id)
        console.log('post saved', post._id)
    })
    .catch(error => console.error(error))