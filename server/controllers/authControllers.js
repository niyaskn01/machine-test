const userModel=require('../model/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

//register
const userRegisterController=async(req,res)=>{
  const  {email,password}=req.body
  try {
    const  existingUser = await userModel.findOne({email})
    if (existingUser) return res.status(400).json('user already exists')

    const hashedPassword=await bcrypt.hash(password,10)

    const user=new userModel({...req.body,password:hashedPassword})
    await user.save()

    res.status(200).json('user created successfully')
  } catch (error) {
    res.status(500).json('error',error)
  }
}

//login
const userLoginController=async(req,res)=>{
  const {email}=req.body
  try {
    const user=await userModel.findOne({email});
    if(!user) return res.json('invalid email')

    const token = jwt.sign({_id:user._id,isAdmin: user.isAdmin},'secret' ,{expiresIn:'7d'})
    const {password,...other}=user._doc
    res.json({
      message:'logged succesfully',
      user:other,
      token
    })

  } catch (error) {
    res.status(500)
    .json(error)
  }
}


module.exports={
  userLoginController,
  userRegisterController
}



