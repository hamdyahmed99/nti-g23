const userModel = require("../database/models/user.model")
class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.status(200).send({apiStatus:true, data: userData, message:"user added"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
    static index = async(req,res)=>{
        try{
            const users = await userModel.find()
            res.status(200).send({apiStatus:true, data:users, message:"all data fetched"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
    static single = async(req,res)=>{
        try{
            const users = await userModel.findById(req.params.id)
            // const users = await userModel.findOne({_id:req.params.id})
            if(!users) throw new Error("user not found")
            res.status(200).send({apiStatus:true, data:users, message:"all data fetched"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
    static delSingle = async(req,res)=>{
        try{
            const users = await userModel.findByIdAndDelete(req.params.id)
            // const users = await userModel.deleteOne({_id:req.params.id})
            if(!users) throw new Error("user not found")
            res.status(200).send({apiStatus:true, data:users, message:"all data fetched"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
    static delMany = async(req,res)=>{
        try{
            const users = await userModel.deleteMany()
            // const users = await userModel.remove()
            res.status(200).send({apiStatus:true, data:users, message:"all data fetched"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }

    }
}
module.exports=User