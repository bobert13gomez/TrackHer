const express= require("express")
const dotenv=require("dotenv")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const { logger } = require("./utils/logger")
const  route  = require("./route/user.route")

app.use(cors({
    origin:"*"
}))
dotenv.config()
app.use(express.json())
app.use("/v1",route)
mongoose.connect(process.env.MONGO_URL).then(()=>{
    logger.info("Database connected successfully")
    app.listen(process.env.PORT,()=>{
        logger.info(`Server connected to port ${process.env.PORT}`)
    })
})




