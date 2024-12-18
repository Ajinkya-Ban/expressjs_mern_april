const express = require('express');
const {getIndexPage,createUser,getAllUsers,getSingleUser,updateUser,userdelete} = require('../controllers/usersController');

//creat the router object

const router = express.Router();

//render html file 
router.get('/',getIndexPage);

//Create New User
router.post("/create-user",createUser);

//Get All users
router.get('/get-all-users',getAllUsers);

//Get single user
router.get('/get-user/:id',getSingleUser);

//update the user
router.put('/update-user/:id',updateUser);

//Delete the user
router.delete("/user-delete/:id", userdelete);

module.exports = router;
