const router = require('express').Router()
const User = require('../controllers/user.controller')

router.get("/add", User.add)
router.post("/add", User.addLogic)

router.get("/", User.index)
router.get("/user/:id", User.single)
router.get("/edit/:id", User.edit)
router.get("/addAddr/:userId", User.addAddr)
router.get("/del/:id", User.delUser)
router.get("/delAddr/:userId/:addrId", User.delAddr)
module.exports = router