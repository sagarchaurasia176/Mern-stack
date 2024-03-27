const mongoose = require("mongoose");
//this page is the schema here
// creating the new jsmSchema 
const jsmSchema = new mongoose.Schema({
    // start to write the schema
    paper: {
        type: String,
        require: true,
    },
    Author: {
        type: String,
        require: true,
    },
    time: {
        type: Date,
        require: true,
        default: Date.now()
    },
});


//exports the module here
module.exports = mongoose.model("Jsm", jsmSchema);