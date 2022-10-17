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
const layoutsFiles = path.join(__dirname, "frontend/layouts")
app.use(express.static(staticFiles))
app.set("view engine", "hbs")
app.set("views", viewsFiles)
hbs.registerPartials(layoutsFiles)
<<<<<<< HEAD
<<<<<<< HEAD
const userRoutes = require("./app/routes/user.routes")
app.use(userRoutes)
app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))
