const fs = require("fs")
// const writeToJson = (data) =>{
//     fs.writeFileSync("data.json", JSON.stringify(data))
// }
// writeToJson([
//     {name:"marwa"},
//     {name:"Mazen"}
// ])

const readFromJson = () =>{
    return JSON.parse(fs.readFileSync("data.json"))
}

console.log(readFromJson())