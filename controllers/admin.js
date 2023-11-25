const dbAdmin = require("../database/models/admin");
const sequelConfig = require("../database/dbConnect")
const index = (req, res) => {
  res.render("pages/admin/pages/index");
};
const viewLogin = (req, res) => {
  res.render("pages/admin/pages/login", {
    layout: "pages/admin/layouts/other",
  });
};
const viewAuth = async (req, res) => {
  const admins = await dbAdmin.findAll();
  const records = admins.map((v) => {
    return v.dataValues;
  });
  res.render("pages/admin/pages/authorization", { records });
};
const createAdmin = async (req, res) => {
  const { fullName, email, password, phoneNumber, role } = req.body;
  try {
    const data = await dbAdmin.create({
      fullName,
      email,
      password,
      phoneNumber,
      role,
    });
    console.log("Admin created Successfully");
    // res.redirect("/admin/auth")
    return res.json(data);
  } catch (error) {
    console.log(error);
    console.log("Error while creating administrator");
  }
};
const updateRecord = async (req, res) => {
  try {
    const { id } = req.query;

    const { fullName, email, phoneNumber, role} = req.body;
    const updatedAdmin = await dbAdmin.update(
      { fullName, email, phoneNumber, role},
      {
        where: { id: id },
      }
    );

    if (updatedAdmin>0 ) {
      return res.status(200).json({ message: "Admin updated successfully" });
    }else{
        return res.status(404).json({ message: "Admin not found" });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteRecord = async (req, res) => {};

module.exports = {
  index,
  viewLogin,
  viewAuth,
  createAdmin,
  updateRecord,
  deleteRecord,
};
