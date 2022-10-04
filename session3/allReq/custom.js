const commonApiUrl = "https://jsonplaceholder.typicode.com/posts"

const dataWrap = document.querySelector("#dataWrap")
const createMyOwnElement = function(parent, ele, txt=null, classes=null){
    let myElement = document.createElement(ele)
    parent.appendChild(myElement)
    myElement.innerText=txt
    myElement.classList = classes
    return myElement
}
const drawTable = (data, heads) =>{
    dataWrap.innerHTML=""
    const table = createMyOwnElement(dataWrap, "table",null, "table table-success table-striped")
    const thead = createMyOwnElement(table, "thead")
    const tbody = createMyOwnElement(table, "tbody")
    let tr = createMyOwnElement(thead, "tr")
    heads.forEach(head=> createMyOwnElement(tr, "th", head))
    data.forEach(d=>{
        let tr = createMyOwnElement(tbody, "tr")
        heads.forEach(head=> createMyOwnElement(tr, "td", d[head]))
})
}
const apiRequest = async() =>{
    try{    
        const result = await (await fetch(commonApiUrl)).json()
        drawTable(result, ["userId", "id", "title", "body"])
    }
    catch(e){
        console.log(e.message)
    }   
}


if(dataWrap) apiRequest()

const add = document.querySelector("#add")
const postData = async(data)=>{
    try{
        const d = await fetch(commonApiUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },  
        })
        const r = await d.json()
        console.log(r)
    }
    catch(e){
        console.log(e.message)
    }
}
if(add){
    add.addEventListener("submit", function(e){
        e.preventDefault()
        const data = {
            title: this.elements.title.value,
            body: this.elements.body.value,
            userId: this.elements.userId.value,
        }
        // console.log(data)
        postData(data)
    })
}

