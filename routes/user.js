const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController")

router.get("/:id/details", UserController.getUserById)

module.exports = router