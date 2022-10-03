// const x = () =>{
//     //array object
//     return {
//         name:"marwa",
//         age:37,
//     }
// }
//self invoke
// (function x() {
//     return function(){
//         console.log("hello")
//     }
// })()()

// x()
//clouser
const c = (x, y) =>{
    return {
        add: () => { return x+y},
        sub: () => x-y,
        x,
        y
    }
}
c1 = c(5,3)
c1.name = "marwa"
console.log(c1.add())
console.log(c1.sub())
c2 = c(50, 30)

