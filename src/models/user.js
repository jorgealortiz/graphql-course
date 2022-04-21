import  mongoose  from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    birth_year: { type: String, required: true},
    gender: { type: String, required: true }
})

export default mongoose.model('user', userSchema)