const express = require("express");
const { userList, createUser, deleteUser, updateUser, userLogin } = require("../controller/userController");

const route = express.Router();


route.route('/user').get(userList);
route.route('/user/create').post(createUser);
route.route('/user/delete/:id').delete(deleteUser); 
route.route('/user/update/:id').put(updateUser);
route.route('/user/login').post(userLogin);
module.exports = route;