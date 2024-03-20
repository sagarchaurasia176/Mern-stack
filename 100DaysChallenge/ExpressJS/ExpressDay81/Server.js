const express = require('express');
const app = express();

app.listen( 3000 , ()=>{
    console.log("data pass")
})

app.get('/' , (req , res)=>{
        res.send("sagar")
})

