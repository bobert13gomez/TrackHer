const express= require("express")
const dotenv=require("dotenv")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const { logger } = require("./utils/logger")
const  route  = require("./route/user.route")
const morgan=require("morgan")
app.use(cors({
    origin:"*"
}))
dotenv.config()
app.use(express.json())

const fs=require('fs')
const path = require("path")
const storagePath=path.join(__dirname,"./uploads")

if(!fs.existsSync(storagePath)){
    fs.mkdirSync(storagePath)
}

app.use(morgan(":method :status :url :response-time ms",{
    stream:{
        write:(mes)=>logger.info(mes.trim())
    }
}))
app.use("/v1",route)


mongoose.connect(process.env.MONGO_URL).then(()=>{
    logger.info("Database connected successfully")
    app.listen(process.env.PORT,()=>{
        logger.info(`Server connected to port ${process.env.PORT}`)
    })
})




