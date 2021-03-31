const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;


const mailSchema = new Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    time:{
        type:Date
    }

},{timestamps:true})

mailSchema.plugin(uniqueValidator);

module.exports = mongoose.model("mail",mailSchema);