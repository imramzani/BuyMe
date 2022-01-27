const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/productController")

router.get("/product", ProductController.getProduct)


module.exports = router

