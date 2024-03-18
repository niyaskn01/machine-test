const mongoose=require('mongoose')
const schema=mongoose.Schema; 
const menuSchema=new schema({
  name:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  categories:{
    type:Array
  }
},{timestamps:true})

module.exports=mongoose.model('menu',menuSchema)