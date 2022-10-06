// console.log("hello")
// const myFs = require("fs")
// myFs.mkdirSync("marwa")
// myFs.renameSync("marwa", "mazen")
// myFs.writeFileSync("a.txt", "hello")
// data = myFs.readFileSync("a.txt")
// console.log(data)
// myFs.unlinkSync(`${__dirname}\\a.txt`)

// console.log(__dirname)
// console.log(__filename)
// const myMod = require("./mazen/index")
// myMod.myFun()
// myMod.myFun1()

const validator = require('validator');
const chalk = require("chalk")
const test =validator.isEmail('foobar.com'); 
console.log(chalk.red(test))


