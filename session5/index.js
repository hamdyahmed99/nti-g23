// npm i pckageName  //yargs
//node fileName YargCommand --builder=value
// const yargs = require("yargs")
// yargs.command({
//     command: "add",
//     builder:{
//         x:{ type:"number", demandOption:true },
//         y:{ type:"number", demandOption:true }
//     },
//     handler: function(argv){
//         console.log(argv.x+argv.y)
//     }
// })
// yargs.command({
//     command: "mul",
//     handler: function(){
//         console.log("test mul")
//     }
// })
// yargs.argv
// http https http2

// const https = require("https")
// const apiURL = "https://dummyjson.com/comments"

// const req = https.request(apiURL, (res)=>{
//     // console.log(res.toString())
//     let data = ""
//     res.on("data", (d)=> {
//         // console.log(JSON.parse(d))
//         // console.log('...')
//         data += d.toString()
//     })
//     res.on('end', ()=> console.log(JSON.parse(data)))
// })
// //req
// req.on('error' , (e)=> console.log(e))
// req.end()
// npm i pckg@ver
const apiURL = "https://dummyjson.com/comments"
const fetch = require("node-fetch")
const myReq = async(url, callback)=>{
    try{
        const result = await (await fetch(url)).json()
        callback(result, null)
    }
    catch(e){
        callback(null, e.message)
    }
}

// myReq(apiURL, (res, err)=>{
//     if(err) return console.log("fe error ", err)
//     console.log(res)
// })

const yargs = require("yargs")
yargs.command({
    command:"api",
    builder:{ 
        url:{ demandOption:true, type:"string"}
    },
    handler: function(argv){
        myReq(argv.url, (res, err)=>{
            if(err) return console.log("fe error ", err)
            console.log(res)
        })
    }
})
yargs.argv









