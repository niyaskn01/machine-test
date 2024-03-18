const userModel=require('../model/userModel')

//get all users
const getAllUsersController=async(req,res)=>{
  try {
    const users=await userModel.find({
      _id:{$ne:req.user._id}
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

//update user
const updateUserController=async(req,res)=>{
  try {
    const updatedUser=await userModel.findByIdAndUpdate(req.user._id,
      {$set:req.body},{new:true})

    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
    
  }
}

//make user as admin
const makeAdminController=async(req,res)=>{
  const {userID}=req.params
  try {
    const user=await userModel.findByIdAndUpdate(userID,{
      $set:{isAdmin:true}
    },{new:true})

    res.status(200).send(user)
  } catch (error) {
    res.status(500).json(error)
    
  }
}

module.exports={
  getAllUsersController,
  updateUserController,
  makeAdminController
}