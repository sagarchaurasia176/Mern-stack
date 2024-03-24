// Databse connections

const mongoose = require("mongoose");

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log("conncetion succesful")
    }).catch((e) => {
        console.log("not connected")
        process.exit(1)
    })


}
module.exports = dbConnect;
