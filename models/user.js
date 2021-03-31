const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    activity:[],
    mails:[
        {
            type:mongoose.Types.ObjectId,
            ref:"mail"
        }
    ]

})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user",userSchema);