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

const drawTable = (data, heads) =>{
    // console.log(data)
    // console.log(heads)
    dataWrap.innerHTML=""
    const table = document.createElement("table")
    dataWrap.appendChild(table)
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)
    let tr = document.createElement("tr")
    thead.appendChild(tr)
    heads.forEach(head=>{
        let th = document.createElement("th")
    tr.appendChild(th)
  th.innerText=head      
})
data.forEach(d=>{
    let tr = document.createElement("tr")
    tbody.appendChild(tr)
    heads.forEach(head=>{
        let td = document.createElement("td")
    tr.appendChild(td)
  td.innerText=d[head]    
})
})
}
const apiRequest = async(apiKey) =>{
    try{    
        const fullURL = `${commonApiUrl}${apiKey.key}`
        const result = await (await fetch(fullURL)).json()
        // const r1= await result.json()
        // console.log(result)
        drawTable(result, apiKey.heads)
    }
    catch(e){
        console.log(e.message)
    }   
}




