const connect = require('../db/connect')
const ObjectId= require("mongodb").ObjectId
class User{
    static add = (req, res)=>{
        res.render("add", {pageTitle:"add New User"})
    }
    static addLogic = (req, res)=>{
        connect(async(err, db)=>{
         if(err) res.render("err404", {pageTitle:"database error 1"})
          try{
            req.body.status? req.body.status=true: req.body.status=false
            req.body.addresses = []
            await db.collection("user").insertOne(req.body) // {...req.body, addresses:[]}
            res.redirect("/")
          }
          catch(e){
            res.render("err404", {pageTitle:"database error 2"})
          }
                // .then(result=> )
                // .catch(e=> res.render("err404", {pageTitle:"database error 2"}))
        })
    }
    static index = (req, res)=>{
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                const data = await db.collection("user").find().toArray()
                res.render("home", {
                    pageTitle:"All Users",
                    data,
                    isEmpty : !data.length
                })
             }
             catch(e){
                res.send(e.message)
             }
            })
    }

    static single = (req, res)=>{
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                const data = await db.collection("user").findOne({_id: new ObjectId(req.params.id)})
                res.render("single",{pageTitle:"user details",data})
             }
             catch(e){
                res.send(e.message)
             }
            })
    }
    static edit = (req, res)=>{
        res.render("edit")
    }
    static addAddr = (req, res)=>{
        res.render("addAddr")
    }
    static addAddrLogic = (req,res)=>{        
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                // {addrType:"x", addrDetails:"y"}
                const data = await db.collection("user")
                .updateOne(
                    {_id: new ObjectId(req.params.userId)}
                    , {$push :{addresses:{_id:new ObjectId(),...req.body}}}
                    )

                res.redirect("/")
             }
             catch(e){
                res.send(e.message)
             }
            })
    }
    static delUser = (req, res)=>{
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                const data = await db.collection("user").deleteOne({_id: new ObjectId(req.params.id)})
                res.redirect("/")
             }
             catch(e){
                res.send(e.message)
             }
            })
    }
    static delAddr = (req, res)=>{
        // const addrId = req.params.addrId
        // res.send(addrId)
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                // {addrType:"x", addrDetails:"y"}
                const data = await db.collection("user")
                .findOne(
                    {"addresses._id": new ObjectId(req.params.addrId)}
                    )
                    
                    const newAddr = data.addresses.filter(d=> d._id!=req.params.addrId)
                //    res.send(newAddr)
                const data1 = await db.collection("user")
                .updateOne(
                    {"addresses._id": new ObjectId(req.params.addrId)}
                    ,
                    {$set:{addresses: newAddr}}
                    )
                
                res.redirect("/")
             }
             catch(e){
                res.send(e.message)
             }
            })
    }
    
}
module.exports = User