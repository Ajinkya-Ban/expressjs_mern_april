const express = require('express');
const {getUser, adduser} = require('../controllers/usersController');

//creat the router object

const router = express.Router();

router.get('/',getUser);
router.post('/user-form',adduser);

module.exports = router;


/*

http://localhost:7878/api/v1
http://localhost:7878/api/v1/user-form
http://localhost:7878/api/v1/user-form/100
http://localhost:7878/api/v1/user-form/1/2


*/