const myForm= document.querySelector("#myForm")
const formHeads = ["userName", "age", "email"]
console.log(myForm);
myForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    // console.log(myForm.elements.userName.value)
    // const user = {
    //     userName : myForm.elements.userName.value,
    //     age : myForm.elements.age.value
    // }
    const user = {}
    formHeads.forEach(head => 
        user[head]= myForm.elements[head].value
        )
    console.log(user)
})