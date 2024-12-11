const express = require('express');
const {getIndexPage, adduser} = require('../controllers/usersController');

//creat the router object

const router = express.Router();

router.get('/',getIndexPage);
router.post('/user-form',adduser);

module.exports = router;


/*

http://localhost:7878/api/v1
http://localhost:7878/api/v1/user-form
http://localhost:7878/api/v1/user-form/100
http://localhost:7878/api/v1/user-form/1/2


*/