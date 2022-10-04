const commonApiUrl = "https://jsonplaceholder.typicode.com/"

const apis= [
    { key: "posts"    , heads:["userId", "id", "title", "body"]},
    { key: "comments" , heads:["postId", "id", "email", "name", "body"]},
    { key: "todos"    , heads:["userId", "id", "title", "completed"]}
]

const myBtns = document.querySelector("#myBtns")
const dataWrap = document.querySelector("#dataWrap")

apis.forEach(api=>{
    const btn = document.createElement("button")
    myBtns.appendChild(btn)
    btn.innerText=api.key
    btn.addEventListener("click", function(e){
     apiRequest(api)   
    })
})
const createMyOwnElement = function(parent, ele, txt=null, classes=null){
    let myElement = document.createElement(ele)
    parent.appendChild(myElement)
    myElement.innerText=txt
    return myElement
}
const drawTable = (data, heads) =>{
    dataWrap.innerHTML=""
    const table = createMyOwnElement(dataWrap, "table")
    const thead = createMyOwnElement(table, "thead")
    const tbody = createMyOwnElement(table, "tbody")
    let tr = createMyOwnElement(thead, "tr")
    heads.forEach(head=> createMyOwnElement(tr, "th", head))
    data.forEach(d=>{
        let tr = createMyOwnElement(tbody, "tr")
        heads.forEach(head=> createMyOwnElement(tr, "td", d[head]))
})
}
const apiRequest = async(apiKey) =>{
    try{    
        const fullURL = `${commonApiUrl}${apiKey.key}`
        const result = await (await fetch(fullURL)).json()
        drawTable(result, apiKey.heads)
    }
    catch(e){
        console.log(e.message)
    }   
}




