const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Ici nous definissons notre schema.
const userSchema = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

module.exports= mongoose.model('user', userSchema);