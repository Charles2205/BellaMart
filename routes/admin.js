const {adminController}=require('../controllers')
const express = require('express')
const app =express.Router()

app.get('/', adminController.index)

module.exports=app