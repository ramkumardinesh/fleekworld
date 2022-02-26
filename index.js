const express = require('express')

const app = express()

app.get('/ram',(req,res)=>{
    res.send("HELLO")
})
app.listen(3000);
console.log("Hello Express");