const mongoose = require("mongoose");


const EventSchema = mongoose.Schema({
    clef : {type : String},
    date : {type : String},
    nbr_participants : { type : Number},
    participants : { type : Array}
})
module.exports = mongoose.model("events",EventSchema)