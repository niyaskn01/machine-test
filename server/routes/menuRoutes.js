const router=require('express').Router()
const {createMenuController, updateMenuController, getAllMenuController} = require('../controllers/menuController')
const { verifyTokenAndAdmin } = require('../middlewares/authMiddleware')

//create menu
router.post('/add',verifyTokenAndAdmin,createMenuController)

//update menu
router.put('/update/:menuID',verifyTokenAndAdmin,updateMenuController)

//get all menu
router.get('/',getAllMenuController)

module.exports=router