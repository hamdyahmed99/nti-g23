const todo = require("./controller/todo")
//node index add t1 c5
// ["node", "index", "add", "t5", "c5"]
// if(process.argv[2]=="add"){
    
// }

switch(process.argv[2]){
    case "add":
        const myData = { id:Date.now(), title:process.argv[3], content:process.argv[4] }
        todo.add(myData)
        break;
    case "showAll":
        todo.showAll()
        break;
    case "single":
        todo.showSingle(process.argv[3])
        break;
    case "del":
        todo.del(process.argv[3])
        break;
    case "edit":
        todo.del(process.argv[3], process.argv[4], process.argv[5])
        break;
    default:
        console.log("invalid operation")
            
}

// console.log(process.argv)