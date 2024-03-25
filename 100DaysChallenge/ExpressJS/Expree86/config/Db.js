// config page => 


const mongoose = require('mongoose')
// it's mandatory to connect with the config file
require('dotenv').config();

// db connect ()
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("db connect succefull")
    }).catch(()=>{
        console.log("error in db connection ")
        console.error("error in db");
        process.exit();
    })
}


// export the db here
module.exports = dbConnect;
