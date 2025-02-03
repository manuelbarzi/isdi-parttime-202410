import mongoose from 'mongoose'
import getUserName from './getUserName.js'

// mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => {
try {
    getUserName('67929ad1c3a1e47aeca030ae')
        .then(name => console.log('user name gotten', name))
        .catch(error => console.error(error))
} catch (error) {
    console.error(error)
}
// })
// .catch(error => console.error(error))