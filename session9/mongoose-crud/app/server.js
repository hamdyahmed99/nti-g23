const express = require("express")
require("dotenv").config()
require("./db/connect")
const hbs = require("hbs")
const path= require("path")
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../frontend/views"))
hbs.registerPartials(path.join(__dirname, "../frontend/layouts"))
app.use(express.static(path.join(__dirname, "../frontend/public")))
const userRoutes = require("./routes/user.routes")
app.use(userRoutes)
app.all("*", (req,res)=> res.render("err404", { pageTitle:"page not found" }) )
module.exports=app