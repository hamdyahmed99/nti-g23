const express = require("express")
const hbs = require("hbs")
const path = require("path")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000
const staticFiles = path.join(__dirname, "frontend/public")
const viewsFiles = path.join(__dirname, "frontend/views")
const layoutsFiles = path.join(__dirname, "frontend/layouts")
app.use(express.urlencoded({extended:true}))
app.use(express.static(staticFiles))
app.set("view engine", "hbs")
app.set("views", viewsFiles)
hbs.registerPartials(layoutsFiles)
<<<<<<< Updated upstream
const userRoutes = require("./app/routes/user.routes")
app.use(userRoutes)
=======
app.get("/", (req,res)=>{
    res.render("home", {
        pageTitle:"Home Page"
    })

})

app.get("/addMethod",(req,res)=>{
    const user ={id:data.now(),...req .query}
    const allUser =deal.readfrom(JSON)
})
app.get("/add", (req,res)=>{
    res.render("add", {
        pageTitle:"Add User",
        title:"Add Ahmed"
    })
})
app.get("/edit", (req,res)=>{
    res.render("edit", {
        pageTitle:"Edit User"
    })
})
app.get("/single", (req,res)=>{
    res.render("single", {
        pageTitle:"Single User"
    })
})

app.get("/delete", (req,res)=>{
    res.send("delete")
})
>>>>>>> Stashed changes
app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))
