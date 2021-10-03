const mongoose = require("mongoose");


const MessageSchema = mongoose.Schema({
    nom : { type : String, required : true},
    prenom : { type : String, required : true},
    mail : { type : String, required : true},
    message : { type : String, required : true},
    phone : { type : String, required : false},
})



module.exports = mongoose.model("messages",MessageSchema)