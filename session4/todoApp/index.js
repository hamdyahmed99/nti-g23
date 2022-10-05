const todo = require("./controller/todo")

const myData = {
    id:Date.now(),
    title:"t1",
    content:"c1"
}
todo.add(myData)