const express = require('express')
const app = express();
app.listen(3000, () => {
    console.log('server run')
})

//types of routers in express

app.get('/', (req, res) => {
    res.send("data fetch");
})



