const deal = require("../controller/deal")
const dbFile = "router/db/users.json"

const showAll = (req,res)=>{
    res.render("home", {
        pageTitle:"Home Page"
    })
}
const add = (req,res)=>{
    res.render("add", {
        pageTitle:"Add User",
        title:"Add Ahmed"
    })
}
const addMethod =  (req, res)=>{
    const user = {id:Date.now(), ...req.query}
    const allUsers = deal.readFromJson(dbFile)
    allUsers.push(user)
    deal.writeToJson(allUsers, dbFile)
    res.redirect("/")
}
const addPost =(req,res)=>{
    res.render("addPost", {
        pageTitle:"Add User",
        title:"Add Ahmed"
    })
}
const addPostMethod =(req, res)=>{
    const user = {id:Date.now(), ...req.body}
    const allUsers = deal.readFromJson(dbFile)
    allUsers.push(user)
    deal.writeToJson(allUsers, dbFile)
    res.redirect("/")
}
const edit = (req,res)=>{
    res.render("edit", {
        pageTitle:"Edit User"
    })
}
const single =(req,res)=>{
    res.render("single", {
        pageTitle:"Single User"
    })
}
const del =(req,res)=>{
    res.send("delete")
}
module.exports = { 
    showAll,add, addMethod, addPost, addPostMethod, edit, del, single
}