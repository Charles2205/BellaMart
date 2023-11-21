const {adminController}=require('../controllers')
const express = require('express')
const app =express.Router()

app.get('/', adminController.viewLogin)
app.get('/dashboard',adminController.index)
app.get('/auth',adminController.viewAuth)




app.patch('/admin')



app.post('/admin',adminController.createAdmin)

module.exports=app