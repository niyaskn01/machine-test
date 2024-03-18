const { userRegisterController, userLoginController } = require('../controllers/authControllers')

const router=require('express').Router()

//login
router.post('/login',userLoginController)

// register
router.post('/register',userRegisterController)

module.exports=router
