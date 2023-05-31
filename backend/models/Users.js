const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    contact:{
        type: Number,
        required:true,
        unique:true
    }
})
const User = mongoose.model("user",userSchema);
module.exports = User