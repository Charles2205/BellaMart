const express = require('express')
const dotEnv = require('dotenv').config()
const {adminRoute,frontendRoute} = require('./routes')
const expressEjsLayouts = require('express-ejs-layouts')

const PORT = process.env.PORT || 7801
const app =express()


app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')


// app.use('/',frontendRoute )
app.use(expressEjsLayouts)
app.set('layout','pages/admin/layouts/master')
app.use('/admin',adminRoute)


const startServer=async()=>{
try {
    app.listen(PORT,()=>{
        console.log(`App is running on {http://localhost:${PORT}}`);
    })
} catch (error) {
    console.log(Error);
}
} 
startServer()
