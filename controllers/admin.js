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
module.exports={
    index,
    viewLogin,
    viewAuth,

}