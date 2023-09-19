const express = require('express')
const app =express.Router()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Client Page</h1>')
})

module.exports =app