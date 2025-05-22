const { v4 } = require("uuid");
const { createSchema } = require("../utils/database");

const lumel=createSchema({name:"lumelUser",Schema:{
    _id:{
        type:String,
        default:v4
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    active:{
        type:Boolean,
        default:true
    },
    status:{
        type:Boolean,
        default:true
    }

}})
module.exports={
    lumel
}

