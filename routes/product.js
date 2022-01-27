const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/productController")


router.get('/', ProductController.allproduct)
router.get('/:id', ProductController.detail)
router.get('/:id/delete', ProductController.deleted)


module.exports = router

