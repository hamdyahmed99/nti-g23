const mongoose=require("mongoose")
const validator = require("validator")
const User = mongoose.model("User",{
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        maxlength:20
    }, 
    age:{
        type:Number,
        min:21,
        max:60,
        default:21
    }, 
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate:function(value){
            if(!validator.isEmail(value)) throw new Error("invalid email formT")
        }
    }, 
    password:{
        type:String,
        trim:true,
        // match: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/
    }, 
    image:{
        type:String,
        trim:true
    }, 
    status:{
        type:Boolean,
        default:false
    },
    gender:{
        type:String,
        trim:true,
        lowercase:true,
        enum:["male", "female"]
    }, 
    addresses:[{        
        addrTye:{
            type:String,
            trim:true    
        },
        addrDetails:{
            type:String,
            trim:true    
        }
    }]
})
module.exports = User