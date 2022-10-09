// // nodemon  => npm i -g nodemon
// const express = require("express")
// const app = express()

// //routes
// app.get("/", (req, res)=>{ //localhost:port/
//     res.send("hello")
// })
// app.get("/about", (req, res)=>{ //localhost:port/
//     res.send("<h2>About</h2>")
// })
// app.get("/json", (req, res)=>{ //localhost:port/
//     res.send([{name:"marwa"}, {name:"mazen"}])
// })
// app.get("/marwa", (req, res)=>{ //localhost:port/
//     res.send([{name:"marwa"}, {name:"mazen"}])
// })
// app.get("/html", (req,res)=>{
//     const myFile = __dirname+"\\a.html"
//     res.sendFile(myFile)
// })
// app.listen(3000, ()=> console.log(`we are on http://localhost:3000`))
// //localhost:3000 => 127.0.0.1



//enviroment variables
// engine => template language 
const express = require("express")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
//static directory 
app.use(express.static(`${__dirname}/public`))
app.set("view engine", "hbs")
app.set("views", 'my-views')
app.get("/", (req,res)=>{
    res.render("home")
})
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))












