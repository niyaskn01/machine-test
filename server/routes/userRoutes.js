const { getAllUsersController, updateUserController, makeAdminController } = require('../controllers/userController');
const { verifyTokenAndAdmin, verifyToken } = require('../middlewares/authMiddleware');

const router=require('express').Router();

//get all users
router.get('/',verifyTokenAndAdmin,getAllUsersController)

//update user
router.put('/update',verifyToken,updateUserController)

//make user as admin
router.put('/set-admin/:userID',verifyTokenAndAdmin,makeAdminController)

module.exports=router