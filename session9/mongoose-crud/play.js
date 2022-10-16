const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/testApp")
const userData = new mongoose.model("userData", {
    name:{
        type:String
    }
})

// const data = new userData({name:"mazen"})
// data.save()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

userData.findById("634bc590f34f277ff54ffcfd").then(res=> console.log(res))