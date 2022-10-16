const userModel = require("../db/models/user.model")
const postModel = require("../db/models/post.model")
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
    static single = async(req, res)=>{
        try{
            const data = await userModel.findById(req.params.id)
            res.render("single", {
                pageTitle:"user Details",
                data
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static edit = async(req, res)=>{
        try{
            const data = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle:"Edit User Details",
                data
            })
        }
        catch(e){
            res.send(e)
        }    
    }
    static editLogic = async(req,res)=>{
        try{
            if(req.body.status=="on") req.body.status=true
            else req.body.status=false
            const data = await userModel.findByIdAndUpdate(
                req.params.id
                , req.body,
                {runValidators:true}
                )
                res.redirect(`/user/${data._id}`)
        }
        catch(e){
            res.send(e)
        }    
    }
    static addAddr = (req, res)=>{
        res.render("addAddr")
    }
    static addAddrLogic = async(req,res)=>{  
        try{
            // const data = await userModel.findById(req.params.userId)
            // // res.send(data)
            // data.addresses.push(req.body)
            // await data.save()
            
            const data = await userModel.findByIdAndUpdate(req.params.userId,
                {$push:{addresses: req.body}},
                {runValidators:true}
                )
            
            res.redirect(`/user/${data._id}`)
        }
        catch(e){
            res.send(e.message)
        }     
    }
    static delUser = async(req, res)=>{
        try{
            const data = await userModel.findByIdAndDelete(
                req.params.id
                )
                res.redirect(`/`)
        }
        catch(e){
            res.send(e)
        }
        }
    static delAddr = async(req, res)=>{
        try{
            const data = await userModel.findOne({"addresses._id": req.params.addrId})
            data.addresses = data.addresses.filter(d=> d._id != req.params.addrId)
            await data.save()
            res.redirect(`/user/${data._id}`)
        }
        catch(e){
            res.send(e)
        }
    }
    static addPost = async(req,res)=>{
        res.render("addPost")
    }
    static addPostLogic = async(req,res)=>{
//userId = req.params.id  req.body{title}
try{
    const postData = new postModel({...req.body, userId:req.params.id})
    await postData.save()
    res.redirect("/")
}
catch(e){
res.send(e.message)
}
    }
}
module.exports = User