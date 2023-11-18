const dbAdmin = require('../database/models/admin')
const index =(req,res)=>{
res.render('pages/admin/pages/index')
}
const viewLogin =(req,res)=>{
    res.render('pages/admin/pages/login',{layout:'pages/admin/layouts/other'})
}
const viewAuth= (req,res)=>{
    res.render('pages/admin/pages/authorization')
}
const createAdmin=async(req,res)=>{
    const {fullName,email,password,phoneNumber,role}= req.body
try {
   await dbAdmin.create({fullName,email,password,phoneNumber,role})
   console.log('Admin created Successfully');
    res.redirect("/admin/auth")
    
} catch (error) {
    console.log(error);
    console.log('Error while creating administrator');
}   
}
const updateList=async()=>{
    const admins = await dbAdmin.findAll()
    const records =admins.map((v)=>{return v.dataValues})
}
module.exports={
    index,
    viewLogin,
    viewAuth,
    createAdmin,

}