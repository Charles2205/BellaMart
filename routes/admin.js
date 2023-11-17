const {adminController}=require('../controllers')
const express = require('express')
const app =express.Router()

app.get('/', adminController.viewLogin)
app.get('/dashboard',adminController.index)
app.get('/dashboard/auth',adminController.viewAuth)

module.exports=app