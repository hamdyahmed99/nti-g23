class User{
    static add = (req, res)=>{
        res.render("add")
    }
    static index = (req, res)=>{
        res.render("home")
    }
    static single = (req, res)=>{
        res.render("single")
    }
    static edit = (req, res)=>{
        res.render("edit")
    }
    static addAddr = (req, res)=>{
        res.render("addAddr")
    }
    static delUser = (req, res)=>{
        res.send("delete")
    }
    static delAddr = (req, res)=>{
        res.send("delAddr")
    }
}
module.exports = User