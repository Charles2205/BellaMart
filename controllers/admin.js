const dbAdmin = require('../database/models/admin')
const sequel = require('../database/dbConnect')
const index =(req,res)=>{
res.render('pages/admin/pages/index')
}
const viewLogin =(req,res)=>{
    res.render('pages/admin/pages/login',{layout:'pages/admin/layouts/other'})
}
const viewAuth= async(req,res)=>{
    const admins = await dbAdmin.findAll()
    const records =admins.map((v)=>{return v.dataValues})
    res.render('pages/admin/pages/authorization',{records})
}
const createAdmin=async(req,res)=>{
    const {fullName,email,password,phoneNumber,role}= req.body
try {
   const data= await dbAdmin.create({fullName,email,password,phoneNumber,role})
   console.log('Admin created Successfully');
    res.redirect("/admin/auth")
    // res.json(data)
    
} catch (error) {
    console.log(error);
    console.log('Error while creating administrator');
}   
}
const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { fullName, phoneNumber, role, email } = req.body;

    try {
        await dbAdmin.update(
            { fullName, phoneNumber, role, email },
            { where: { id: id } }
        );

        console.log('Admin updated Successfully');
        res.redirect('/admin/auth');
    } catch (error) {
        console.log(error);
        console.log('Error while updating administrator');
    }
}

const deleteRecord = async(req,res)=>{
   

   
}


module.exports={
    index,
    viewLogin,
    viewAuth,
    createAdmin,
    updateRecord,
    deleteRecord,


}