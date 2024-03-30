const mongoose = require('mongoose');
//to import the database url here
require('dotenv').config();
// db connect
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        //this is the flag in mongodb
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("coonections done")
    }).catch(() => {
        console.log("error in db connection")
    })
}
module.exports = dbConnect;