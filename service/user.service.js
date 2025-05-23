const bcrypt=require('bcryptjs')
const { lumel } = require('../model/user.model')
const { logger } = require('../utils/logger')

exports.createUser=async(req,res)=>{

try{
if(req.body.password){
    const salt=await bcrypt.genSalt(10)
    req.body.password=await bcrypt.hash(req.body.password,salt)
}

   const createUser= await lumel.create({
       ...req.body
    })
    
res.status(200).send({message:"User Created Successfully"})
}catch(err){
    res.status(500).send({status:500,message:err.message})
    logger.error(err.message)
}
}