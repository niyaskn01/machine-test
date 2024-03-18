const menuModel=require('../model/menuModel')

//create menu
const createMenuController=async(req,res)=>{
  try {
    const menu=new menuModel(req.body)
    await menu.save()

    res.status(200).json({
      message:'new item created',
      menu
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

//update menu
const updateMenuController=async(req,res)=>{
  const {menuID}=req.params;
  try {
    const updatedMenu=await menuModel.findByIdAndUpdate(menuID,{
      $set:req.body
    },{new:true})

    res.status(200).json(updatedMenu)
  } catch (error) {
    res.status(500).json(error)
  }
}

//get all menu
const getAllMenuController=async(req,res)=>{
  try {
    const menus=await menuModel.find().sort({createdAt:-1})

    res.status(200).json(menus)
  } catch (error) {
    res.status(500).json(error)
    
  }
}

module.exports={
  createMenuController,
  updateMenuController,
  getAllMenuController
}