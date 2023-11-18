const express = require('express')
require('dotenv').config()
const {adminRoute,frontendRoute} = require('./routes')
const expressEjsLayouts = require('express-ejs-layouts')
const dbConnect = require('./database/dbConnect')

const PORT = process.env.PORT || 9012
const app = express()


app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))


// app.use('/',frontendRoute )
app.use(expressEjsLayouts)
app.set('layout','pages/admin/layouts/master')
app.use('/admin',adminRoute)



const startServer=async()=>{
try {
    await dbConnect.authenticate()
    app.listen(PORT,()=>{
        console.log(`App is running on {http://localhost:${PORT}}`);
    })
} catch (error) {
    console.log(Error);
}
} 
startServer()
