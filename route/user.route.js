const express=require("express")
const { logger } = require("../utils/logger")
const { lumel } = require("../model/user.model")
const { createToken, verifyToken } = require("../middleware/jwt.config")
const route=express.Router()
const bcrypt=require('bcryptjs')
const { createUser } = require("../service/user.service")
route.route("/post").post(createUser)
route.route("/login").post(async(req,res)=>{
try{
   const createUser= await lumel.findOne({
       phone:req.body.phone
    })
    if(!createUser){
            res.status(404).send({status:500,message:"User Not found"})

    }
    const token=createToken({id:createUser._id})
res.status(200).send({message:"User Created Successfully",token})
}catch(err){
    res.status(500).send({status:500,message:err.message})
    logger.error(err.message)
}
})
route.route("/verify").post(verifyToken,async(req,res)=>{
    console.log(req.user)
try{
   const createUser= await lumel.findOne({
       phone:req.body.phone
    })
    if(!createUser){
            res.status(404).send({status:500,message:"User Not found"})

    }
    const token=createToken({id:createUser._id})
res.status(200).send({message:"User Created Successfully",token})
}catch(err){
    res.status(500).send({status:500,message:err.message})
    logger.error(err.message)
}
})




module.exports=route