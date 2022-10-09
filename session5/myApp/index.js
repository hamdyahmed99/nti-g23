//npm init --y
// npm i express hbs dotenv
const express = require("express")
const hbs = require("hbs")
const path = require("path")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000
const staticFiles = path.join(__dirname, "frontend/public")
const viewsFiles = path.join(__dirname, "frontend/views")
app.use(express.static(staticFiles))
app.set("view engine", "hbs")
app.set("views", viewsFiles)
app.get("/", (req,res)=>{
    res.render("home")
})
app.get("/about", (req,res)=>{
    res.render("about")
})
app.listen(PORT)
