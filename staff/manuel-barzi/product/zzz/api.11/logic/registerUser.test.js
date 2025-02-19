import 'dotenv/config'
import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        try {
            registerUser('Coco Drilo', 'coco@drilo.com', 'cocodrilo', '123123123')
                .then(result => console.log('user registered', result)) // result -> undefined
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))