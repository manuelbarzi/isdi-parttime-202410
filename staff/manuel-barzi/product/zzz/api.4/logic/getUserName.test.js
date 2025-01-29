import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            getUserName('679154221d3078cb8503a79f')
                .then(name => console.log('user name gotten', name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))