import mongoose from 'mongoose'

//we given only 3 items in frontend
const whatsappSchema= mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

//collection
export default mongoose.model('messagecontents', whatsappSchema)