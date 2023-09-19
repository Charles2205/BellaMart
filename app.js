const express = require('express')
const dotEnv = require('dotenv').config()
const {adminRoute,frontendRoute} = require('./routes')
const expressEjsLayouts = require('express-ejs-layouts')

const PORT = process.env.PORT || 1293
const app =express()


app.use(express.static(__dirname+'/public'))
app.set('view','ejs')

app.use('/admin',adminRoute)
app.use('/',frontendRoute )




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
