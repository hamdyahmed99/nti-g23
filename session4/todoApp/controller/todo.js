const deal = require("./dealWithJson")
const fileName = "todo.json"
const add = (data) =>{
    const myTodo = deal.readFromJson(fileName)
    myTodo.push(data)
    deal.writeToJson(myTodo, fileName)
}
const showAll = () =>{}
const showSingle = () =>{}
const edit = () =>{}
const del = () =>{}
module.exports = {
    add, showAll, showSingle, edit, del
}