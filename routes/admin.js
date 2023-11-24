const {adminController}=require('../controllers')
const express = require('express')
const app =express.Router()

app.get('/', adminController.viewLogin)
app.get('/dashboard',adminController.index)
app.get('/auth',adminController.viewAuth)




app.put('/auth',adminController.updateRecord)

// app.delete('/admin:id',adminController.deleteRecord)



app.post('/auth',adminController.createAdmin)

module.exports=app