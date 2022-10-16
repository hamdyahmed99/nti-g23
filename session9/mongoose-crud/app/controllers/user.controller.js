const userModel = require("../db/models/user.model")
class User{
    static add = (req, res)=>{
        res.render("add", {pageTitle:"add New User"})
    }
    static addLogic = async(req, res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static index = async(req, res)=>{
        try{
            const data = await userModel.find()
            res.render("home",{pageTitle:"home", data, isEmpty:!data.length})
        }
        catch(e){
            res.send(e)
        }
    }
    static single = (req, res)=>{
    }
    static edit = (req, res)=>{
        res.render("edit")
    }
    static addAddr = (req, res)=>{
        res.render("addAddr")
    }
    static addAddrLogic = (req,res)=>{        
    }
    static delUser = (req, res)=>{
    }
    static delAddr = (req, res)=>{
    }
    
}
module.exports = User