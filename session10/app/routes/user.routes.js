const router = require('express').Router()
const User = require("../controllers/user.controller")

router.post("/register", User.register)
router.get("/", User.index)
router.get("/single/:id", User.single)
router.delete("/", User.delMany)
router.delete("/single/:id", User.delSingle)

module.exports = router