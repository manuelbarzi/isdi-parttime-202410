import mongoose from 'mongoose'
import updatePostText from './updatePostText.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePostText('6797e266f58b89529b8bd2ec', '67aba55302fc7afa951a6fda', 'new text 2')
                .then(result => console.log('post text updated', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))