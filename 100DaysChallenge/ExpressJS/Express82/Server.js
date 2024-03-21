const express = require("express");
const app = express();
const port = 3000;

// listen ports
app.listen(port, () => {
    console.log("server start");
});


// middleware -     

// to handle the parser you can used the bodyParser
// it is speciall used in put and post

const bodyParser = require('body-parser')
app.use(bodyParser.json());


// send the req to the postman
app.post("/api/data", (req, res) => {
    const { name, brand } = req.body;
    console.log(name)
    console.log(brand)
    res.send("data stored")

});
