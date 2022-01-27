const express = require("express")
const router =  express.Router()
const userRoute = require("./user")
const UserController = require("../controllers/UserController")

router.get("/", UserController.getUser)

router.get("/regis", UserController.getRegis)
router.post("/regis", UserController.postRegis)

router.get("/login", UserController.getLogin)
router.post("/login", UserController.postLogin)


// router.use("/user", storeRoute)

module.exports = router
