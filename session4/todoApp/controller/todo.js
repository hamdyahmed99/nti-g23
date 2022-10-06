const deal = require("./dealWithJson")
const fileName = "todo.json"
const add = (data) =>{
    const myTodo = deal.readFromJson(fileName)
    const isFound = myTodo.findIndex(t=> t.title==data.title)
    if(isFound!=-1) return console.log("item used before")
    myTodo.push(data)
    deal.writeToJson(myTodo, fileName)
    console.log("data added")
}
const showAll = () =>{
    const myTodo = deal.readFromJson(fileName)
    if(!myTodo.length) return console.log("no data")
    myTodo.forEach(t=> console.log(`id=> ${t.id}
title => ${t.title}
content => ${t.content}    
    `))
}
const showSingle = (id) =>{
    const myTodo = deal.readFromJson(fileName)
    const result = myTodo.find(t=> t.id == id)
    if(!result) return console.log("id not found")
    console.log(`id=> ${result.id}
title=> ${result.title}
content=> ${result.content}`)
}
const edit = (id, newTitle, newContent) =>{
    const myTodo = deal.readFromJson(fileName)
    const isFound = myTodo.findIndex(t=> t.id==id)
    if(isFound==-1) return console.log("item not found")
    myTodo[isFound].title = newTitle
    myTodo[isFound].content = newContent
    deal.writeToJson(myTodo)
}
const del = (id) =>{
    const myTodo = deal.readFromJson(fileName)
    const isFound = myTodo.findIndex(t=> t.id==id)
    if(isFound==-1) return console.log("item not found")
    myTodo.splice(isFound, 1)
    deal.writeToJson(myTodo)
    console.log("deleted")
}
module.exports = {
    add, showAll, showSingle, edit, del
}