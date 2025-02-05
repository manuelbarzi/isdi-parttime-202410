import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => User.deleteMany())
    .then(() => Post.deleteMany())
    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

        return pepito.save()
    })
    .then(pepito => {
        console.log('user saved', pepito._id)

        const post = new Post({ author: pepito._id, image: 'https://fbi.cults3d.com/uploaders/12888752/illustration-file/302725c9-6bea-4a51-94a6-78bdc672e410/jiminy-anglea1.jpg', text: 'hat off!' })

        return post.save()
    })
    .then(post => console.log('post saved', post._id))
    .catch(error => console.error(error))