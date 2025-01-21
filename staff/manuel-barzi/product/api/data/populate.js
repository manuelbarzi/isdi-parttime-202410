import mongoose from 'mongoose'

const { Schema, model } = mongoose

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

const User = model('User', user)


mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

        pepito.save()
            .then(() => console.log('user saved'))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))