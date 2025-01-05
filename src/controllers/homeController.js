import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  let data = await db.User.findAll();
  return res.render("homepage.ejs", { data: JSON.stringify(data) });
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createUser(req.body);
  console.log(message);
  return res.send("post CRUD");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("--------------------------------");
  console.log(data);
  console.log("--------------------------------");
  return res.render("displayCRUD.ejs", { dataTable: data });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;

  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    //check user data not found

    return res.render("editCRUD.ejs", { user: userData });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", { dataTable: allUser });
};
module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
};
