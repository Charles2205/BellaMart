const express = require('express')
const dotEnv = require('dotenv').config()
const {adminRoute,frontendRoute} = require('./routes')

const PORT = process.env.PORT || 1293
const app =express()




app.use('/admin',adminRoute)
app.use('/',frontendRoute )




const startServer=async()=>{
try {
    app.listen(PORT,()=>{
        console.log(`App is running on http://localhost:${PORT}`);
    })
} catch (error) {
    console.log(Error);
}
} 
startServer()