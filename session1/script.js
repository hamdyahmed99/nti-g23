// let x = 5
// var y = 3
// const z = 12
// var y = 3
// if(true){
//     let x = 5
//     const z = 12
// }
// console.log(z)

//var let const
// const y = 5
// x = 5
// var x = 5
// var x = 12

// let x 
// x = 3


// let x = 5

// if(true){
//     let x = 10
//     console.log(`x inside scope ${x}`)
// }

// console.log(`x outside scope ${x}`)

// var x = 3
// let y = 5

// function f1(){
//     var x = 15
//     let y = 15

// }

// f1()

// console.log(`x outside scope ${x}`)
// console.log(`y outside scope ${y}`)


/*
get number from user => 2
add two numbers
sub two num
mul two
div 
*/
function getInputFromUser( msg , dataType = "Number" ){
    return dataType=="Number" ? +prompt(msg) : prompt(msg)
}
// function add( num1 , num2 ){
//     return(num1 + num2)
// }
// function sub( num1 , num2 ){
//     return(num1 - num2)
// }
// function mul( num1 , num2 ){
//     return(num1*num2)
// }
// function div( num1 , num2 ){
//     return num2==0 ? "invalid division by 0": (num1/num2)
// }

// function myRunner(){
//     let x = getInputFromUser(" x = ")
//     let y = getInputFromUser(" y = ")
//     let op = getInputFromUser("operator = ", dataType="string")
//     // console.log(` x + y = ${add(x,y)}`)
//     // console.log(` x - y = ${sub(x,y)}`)
//     // console.log(` x * y = ${mul(x,y)}`)
//     // console.log(` x / y = ${div(x,y)}`)
//     let result
//     switch(op){
//         case '+': result=` x + y = ${add(x,y)}`; break;
//         case '-': result=` x - y = ${sub(x,y)}`; break;
//         case '*': result=` x * y = ${mul(x,y)}`; break;
//         case '/': result=` x / y = ${div(x,y)}`; break;
//         default: result="invalid operator"
//     }
//     return result
// }

// console.log(myRunner())


// function add(...a){
//     let result = 0
//     a.forEach(function(el){
//         result+=el
//     })
//     console.log(result)
// }

// add(1,2,3,4,5,6)

// function getNumbers (){
//     let arr = []
//     while(true){
//         let val = getInputFromUser("val = ")
//         if(val==0) break;
//         arr.push(val)
//     }
//     return arr
// }

// function add(...a){
//     // if(typeof a[0]=='object') a = a[0]
//     if(Array.isArray(a[0])) a= a[0]
//     let result = 0
//     a.forEach(function(el){
//         result+=el
//     })
//     console.log(result)
// }

// const a = getNumbers()
// add(a)

// add(1,2,3)

// forEach , findIndex, find, filter


const arr = [1,2,3,5,3,2]
//for each
// arr.forEach(el=> console.log(el))

//find
// const r = arr.find(el => {
//     return el>10
// })
// console.log(r)

// //findIndex
// const r1 = arr.findIndex(el => {
//     return el>10
// })
// console.log(r1)

// //filter
// const r2 = arr.filter(el => {
//     return el>=10
// })
// console.log(r2)

let myObj = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    // print: function(){
    //     for(x in this){
    //         if(x!=="print") console.log(`${x} => ${this[x]}`)
    //     }
    // }
}
// myObj.l = "marwa"
// myObj["l"]="marwa"
// console.log(myObj["albumId"])
// console.log(myObj)
// myObj.print()
function test(myObj){
    myObj.name="marwa"
}
test(myObj)
console.log(myObj)


// let data = [
//     {
//         albumId: 1,
//         id: 1,
//         title: "accusamus beatae ad facilis cum similique qui sunt",
//         url: "https://via.placeholder.com/600/92c952",
//         thumbnailUrl: "https://via.placeholder.com/150/92c952"
//     },
//     {
//         albumId: 1,
//         id: 2,
//         title: "reprehenderit est deserunt velit ipsam",
//         url: "https://via.placeholder.com/600/771796",
//         thumbnailUrl: "https://via.placeholder.com/150/771796"
//         },
//         {
//         albumId: 1,
//         id: 3,
//         title: "officia porro iure quia iusto qui ipsa ut modi",
//         url: "https://via.placeholder.com/600/24f355",
//         thumbnailUrl: "https://via.placeholder.com/150/24f355"
//         },
//         {
//         albumId: 1,
//         id: 4,
//         title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//         url: "https://via.placeholder.com/600/d32776",
//         thumbnailUrl: "https://via.placeholder.com/150/d32776"
//         },
//         {
//         albumId: 1,
//         id: 5,
//         title: "natus nisi omnis corporis facere molestiae rerum in",
//         url: "https://via.placeholder.com/600/f66b97",
//         thumbnailUrl: "https://via.placeholder.com/150/f66b97"
//         },
//         {
//         albumId: 1,
//         id: 6,
//         title: "accusamus ea aliquid et amet sequi nemo",
//         url: "https://via.placeholder.com/600/56a8c2",
//         thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
//         },
//         {
//         albumId: 1,
//         id: 7,
//         title: "officia delectus consequatur vero aut veniam explicabo molestias",
//         url: "https://via.placeholder.com/600/b0f7cc",
//         thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
//         },
//         {
//         albumId: 1,
//         id: 8,
//         title: "aut porro officiis laborum odit ea laudantium corporis",
//         url: "https://via.placeholder.com/600/54176f",
//         thumbnailUrl: "https://via.placeholder.com/150/54176f"
//         },
//         {
//         albumId: 1,
//         id: 9,
//         title: "qui eius qui autem sed",
//         url: "https://via.placeholder.com/600/51aa97",
//         thumbnailUrl: "https://via.placeholder.com/150/51aa97"
//         },
//         {
//         albumId: 1,
//         id: 10,
//         title: "beatae et provident et ut vel",
//         url: "https://via.placeholder.com/600/810b14",
//         thumbnailUrl: "https://via.placeholder.com/150/810b14"
//         }
//         ]










