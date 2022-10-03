//html items
const addUser = document.querySelector("#addUser") 
const userWrap=document.querySelector("#userWrap")
const singleUserWrap = document.querySelector("#singleUserWrap")
const editUserForm = document.querySelector("#editUser")
// console.log(editUserForm)
//user details
const userHeads = ["name", "age", "email"]
//read from localstorage
const readFromStorage = (key="users") => JSON.parse(localStorage.getItem(key))||[]
//write to localstorage
const writeToStorage = (users, key="users") => localStorage.setItem(key, JSON.stringify(users))
//create spcial element
const createMyOwnEle = (createdElement, parent, txt=null, classes=null) =>{
    const myElement= document.createElement(createdElement)
    parent.appendChild(myElement)
    myElement.textContent=txt
    myElement.classList=classes
    return myElement
}
//delete user 
const delUser = (allUsers, index) =>{
    allUsers.splice(index, 1)
    writeToStorage(allUsers)
    drawAll(allUsers)
}
//showUserAction
const showUser = (user)=>{
    writeToStorage(user, "single")
    window.location.href = "single.html"
}
//editUserAction
const editUserAction= (user, index)=>{
    writeToStorage(index,"editId")
    // writeToStorage(user,"editUser")
    window.location.href = "edit.html"
}
//drawAllItems 
const drawAll = (allUsers) =>{
    userWrap.innerHTML=""
    allUsers.forEach((user, index)=>{
        const tr = createMyOwnEle("tr", userWrap)
        createMyOwnEle("td", tr, user.id)
        createMyOwnEle("td", tr, user.name)
        const td = createMyOwnEle("td", tr)
        const showBtn = createMyOwnEle("button", td, "Show", "btn btn-primary mx-2")
        showBtn.addEventListener("click", ()=> showUser(user))
        const editBtn = createMyOwnEle("button", td, "edit", "btn btn-warning mx-2")
        editBtn.addEventListener("click", ()=> editUserAction(user, index))
        const delBtn = createMyOwnEle("button", td, "delete", "btn btn-danger mx-2")
        delBtn.addEventListener("click", ()=> delUser(allUsers, index))
    })
}
//Add Form
if(addUser){
    addUser.addEventListener("submit", function(e){
        e.preventDefault()
        const user = { id:Date.now() }
        userHeads.forEach(head=> user[head] = this.elements[head].value)
        const users = readFromStorage()
        users.push(user)
        writeToStorage(users)
        addUser.reset()
        window.location.href="index.html"
    })
}
//show all
if(userWrap){
    const allUsers = readFromStorage()
    drawAll(allUsers)        
}
if(singleUserWrap){
    const userData = readFromStorage("single")
    singleUserWrap.innerHTML= `<div class="row">
        <p class="col-6">Id: ${userData.id}</p>
        <p class="col-6">Name: ${userData.name}</p>
        <p class="col-6">Age: ${userData.age}</p>
        <p class="col-6">Email: ${userData.email}</p>
    </div> `
}

if(editUserForm){
    const allUsers = readFromStorage()
    const userIndex = localStorage.getItem("editId")
    const user = allUsers[userIndex]
    userHeads.forEach(head=> editUserForm.elements[head].value = user[head])
    editUserForm.addEventListener("submit", function(e){
        e.preventDefault()
        const user = { id: allUsers[userIndex].id}
        userHeads.forEach(head=> user[head] = editUserForm.elements[head].value )
        allUsers[userIndex] = user
        writeToStorage(allUsers)
        window.location.href="index.html"        
    })
}