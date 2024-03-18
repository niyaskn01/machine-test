const { default: mongoose } = require('mongoose');

const schema=require('mongoose').Schema;
const userSchema=new schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
},{timestamps:true})

module.exports=mongoose.model('users',userSchema)