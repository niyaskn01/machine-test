const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
  const authHeader=req.headers.token
  if(authHeader){
    const token=authHeader.split(" ")[1] 
    jwt.verify(token,'secret',(err,user)=>{
      if (err) {
        console.error(err);
        return res.status(401).json({ message: 'Token is not valid' });
      }

      req.user=user
      next()
    })
  }else{
    res.json('access denied')
  }
}


const verifyTokenAndAdmin=(req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.user.isAdmin){
      next()
    }else{
      res.status(401).json('you are not allowed to do that')
    }
  })
}


module.exports={
  verifyToken,
  verifyTokenAndAdmin
}