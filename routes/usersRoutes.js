const express = require('express');
const {getIndexPage,createUser,getAllUsers,getSingleUser,updateUser,userdelete,
    getHomeEjs, aboutEJS, contactEJS,registerEJS
} = require('../controllers/usersController');

//creat the router object

const router = express.Router();

//render html file 
// router.get('/',getIndexPage);

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

// Render index.ejs file
router.get('/home',getHomeEjs);

//render about ejs page
router.get('/about',aboutEJS);

//render contact ejs page
router.get('/contact',contactEJS);

// register ejs page
router.get('/register',registerEJS);

module.exports = router;
