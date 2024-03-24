const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server start")
})


const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/JainServer', {
    
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("conncetion done")
}).catch((e)=>{
    console.log("conncetions error")
});

