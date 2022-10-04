// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(result=> result.json() )
// .then(d=> console.log(d) )
// .catch(err=> console.log(err))


//error handling
// try{
// ikxbhjvxhhjxbhj
// }
// catch(e){
// console.log(e.message)
// }

async function myResult(cb){
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/todos") 
        result = await result.json()
        cb(result, false)
    }
    catch(e){
        cb(false, e.message)
    }
}

myResult((res, err)=> {
    if(res) {
        console.log("fe data")
        console.log(res)
    }
    else{
        console.log("fee error")
        console.log(err)
    }
})



// const x = async() =>{}
// const y = async function(){}
