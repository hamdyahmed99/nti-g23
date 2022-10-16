const mongoose = require("mongoose")
const Post = mongoose.model("Post",{
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    // content:{},
    // dueDate:{},
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports= Post