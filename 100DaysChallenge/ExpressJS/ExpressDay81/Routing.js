const express = require("express");
const app = express();
const port = 3000;

// listen port to the server
app.listen(port, () => {
    console.log('server is start')
})

//types of routing

app.get('/' , (req , res) =>{
    res.send("pass")
})

app.post('./data/api' , (req , res)=>{
    const{name , email} = req.body;
    console.log(name)
    console.log(email)
    res.send("data passed")
})
