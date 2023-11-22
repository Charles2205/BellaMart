const {adminController}=require('../controllers')
const express = require('express')
const app =express.Router()

app.get('/', adminController.viewLogin)
app.get('/dashboard',adminController.index)
app.get('/auth',adminController.viewAuth)




app.patch('/:id',adminController.updateRecord)

// app.delete('/admin:id',adminController.deleteRecord)



app.post('/admin',adminController.createAdmin)

module.exports=app