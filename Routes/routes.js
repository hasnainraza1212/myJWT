const express = require('express');
 const authController = require('../controllers/User');
const { verifyToken } = require('../middleWare/jwtMiddleWare');
const router = express.Router()

//const {createUser,signup,login,getUser}=require('../controllers/User')
//const { verifyToken } = require('../utils/jwt');

router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.get('/getUser',verifyToken,authController.getUser)


module.exports = router;